import mysql, { ResultSetHeader } from "mysql2/promise";
import { Pool } from "mysql2/promise";
import crypto from "crypto";
import { User, Review, Token } from "../interfaces/Database";
import bcrypt from "bcrypt";

let pool: Pool | undefined = undefined;

export const connectDB = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DATABASE_URL,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: 3306,
      database: "lookahead",
      dateStrings: ["DATETIME"],
      connectionLimit: 10,
      connectTimeout: 20000,
    });
  }
  return pool;
};

export const closePool = () => {
  if (pool) {
    pool.destroy();
    pool = undefined;
  }
};

export async function insertToken(
  user_id: number,
  token_type: string,
  token_value: string,
  created_at: Date | undefined,
  expires_at: Date | undefined
) {
  const connection = connectDB();
  try {
    if (!created_at) {
      created_at = new Date();
    }

    let query_columns;
    let query_prepares;
    let query_prepare_vals;
    if (!expires_at) {
      query_columns = "(user_id, token_type, token_value, created_at)";
      query_prepares = "(?, ?, ?, ?)";
      query_prepare_vals = [user_id, token_type, token_value, created_at];
    } else {
      query_columns =
        "(user_id, token_type, token_value, created_at, expires_at)";
      query_prepares = "(?, ?, ?, ?, ?)";
      query_prepare_vals = [
        user_id,
        token_type,
        token_value,
        created_at,
        expires_at,
      ];
    }

    const query_statement = `INSERT INTO Tokens ${query_columns} VALUES ${query_prepares}`;

    const ret = await connection.query(query_statement, query_prepare_vals);
    console.log("Token inserted!");
  } catch (error) {
    console.log("Error occured while inserting: ");
    console.log((error as Error).toString());
    throw error;
  }
}

export async function validateToken(token_value: string) {
  const connection = connectDB();
  try {
    const query = `SELECT DISTINCT * FROM Tokens WHERE token_value = '${token_value}'`;
    const [ret_query] = await connection.query<Token[]>(query);

    if (ret_query.length === 0) throw new Error("Token Not Found");

    const ret_token = ret_query[0];
    const expires_at = new Date(ret_token.expires_at);
    const now = new Date();

    const isValid = now.getTime() - expires_at.getTime() <= 0;

    if (!isValid) return false;

    if (ret_token.token_type === "register_token") {
      const user_id = ret_token.user_id;
      const validate_query = `UPDATE Users SET validated = true WHERE id = ${user_id}`;
      connection.query(validate_query);
      removeTokenByValue(ret_token.token_value);
    }

    return true;
  } catch (error) {
    throw error;
  }
}

export async function removeTokenByUserId(user_id: number) {
  const connection = connectDB();

  const query = `DELETE FROM Tokens WHERE user_id = ${user_id}`;
  connection.query(query);
}

export async function updateRegisterToken(
  user_id: number,
  token_value: string,
  created_at: Date,
  expires_at: Date
) {
  const connection = connectDB();

  const query = `UPDATE Tokens SET token_value = '${token_value}', created_at = '${created_at
    .toISOString()
    .slice(0, 19)
    .replace("T", " ")}', expires_at = '${expires_at
    .toISOString()
    .slice(0, 19)
    .replace("T", " ")}' WHERE user_id = ${user_id}`;
  const ret_query = await connection.query(query);
}

export async function getAdminTokens() {
  const connection = connectDB();
  try {
    const access_query =
      "SELECT * FROM Tokens WHERE user_id = 1 AND token_type = 'access'";
    const [access_query_rows] = await connection.query<Token[]>(access_query);
    const access_token = access_query_rows[0]?.token_value;

    const refresh_query =
      "SELECT * FROM Tokens WHERE user_id = 1 AND token_type = 'refresh'";
    const [refresh_query_rows] = await connection.query<Token[]>(refresh_query);
    const refresh_token = refresh_query_rows[0].token_value;

    const tokens = {
      access_token,
      refresh_token,
    };

    return tokens;
  } catch (error) {
    throw error;
  }
}

export async function searchUserByEmail(email: string) {
  const connection = connectDB();
  try {
    const query = `SELECT DISTINCT * FROM Users WHERE email = '${email}'`;
    const [ret_query] = await connection.query<User[]>(query);
    return ret_query;
  } catch (error) {
    throw error;
  }
}

export async function searchUserById(id: number) {
  const connection = connectDB();
  try {
    const query = `SELECT * FROM Users WHERE id = ${id}`;
    const [ret_query] = await connection.query<User[]>(query);
    return ret_query;
  } catch (error) {
    throw error;
  }
}

export async function insertUser(
  username: string,
  email: string,
  password: string | undefined,
  imageUrl: string | undefined
) {
  if (!email) throw new Error("An email is required");
  try {
    const connection = connectDB();

    let columns, column_values, password_hash;
    if (!password && !imageUrl)
      throw new Error("Both password and imageUrl not provided");
    if (password && imageUrl)
      throw new Error("Both password and imageUrl provided while signing up");
    if (!password && imageUrl) {
      columns = "(username, email, image_url, validated)";
      column_values = `('${username}', '${email}', '${imageUrl}', false)`;
    } else if (password && !imageUrl) {
      columns = "(username, email, password_hash, validated)";
      const password_hash = await bcrypt.hash(password, 10);
      column_values = `('${username}', '${email}', '${password_hash}', false)`;
    }
    const query = `INSERT INTO Users ${columns} VALUES ${column_values}`;
    const [result] = await connection.query<ResultSetHeader>(query);

    return result.insertId;
  } catch (error) {
    throw error;
  }
}

export async function removeUserById(id: number) {
  const connection = connectDB();

  const query = `DELETE FROM Users WHERE id = ${id}`;
  try {
    await connection.query(query);
  } catch (error) {
    throw error;
  }
}

export async function updatePasswordWithToken(token: string, password: string) {
  const connection = connectDB();
  try {
    const token_query = `SELECT * FROM Tokens WHERE token_value = '${token}'`;
    const [token_ret] = await connection.query<Token[]>(token_query);

    const curr_tok = token_ret[0];

    const hash_password = await bcrypt.hash(password, 10);

    const update_query = `UPDATE Users SET password_hash = '${hash_password}' WHERE id = ${curr_tok.user_id}`;

    await connection.query(update_query);
  } catch (error) {
    throw error;
  }
}

export const removeTokenByValue = async (value: string) => {
  const connection = connectDB();
  try {
    const query = `DELETE FROM Tokens WHERE token_value = '${value}'`;
    await connection.query(query);
  } catch (error) {
    throw error;
  }
};

export async function getAllReviews() {
  const connection = connectDB();
  try {
    const query = "SELECT * FROM Reviews";
    const [ret_query] = await connection.query<Review[]>(query);
    return ret_query;
  } catch (error) {
    throw error;
  }
}

export async function getReviewsByPlaceId(place_id: string) {
  const connection = connectDB();
  try {
    const query = `SELECT * FROM Reviews WHERE place_id = '${place_id}'`;

    const [ret_query] = await connection.query<Review[]>(query);

    return ret_query;
  } catch (error) {
    throw error;
  }
}

export async function addReview(
  user_id: number,
  place_id: string,
  place_name: string,
  review_title: string,
  review_text: string,
  review_rating: number
) {
  const connection = connectDB();

  const query =
    "INSERT INTO Reviews (user_id, place_id, place_name, review_title, review_text, review_rating, posted_on) VALUES (?, ?, ?, ?, ?, ?, ?)";

  try {
    await connection.query(query, [
      user_id,
      place_id,
      place_name,
      review_title,
      review_text,
      review_rating,
      new Date(),
    ]);
  } catch (error) {
    throw new Error((error as Error).toString());
  }
}

export function createToken() {
  const tokenBuffer = crypto.randomBytes(32);
  return tokenBuffer.toString("hex");
}
