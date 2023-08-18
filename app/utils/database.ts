import mysql from "mysql2/promise";
import { Pool } from "mysql2/promise";
import { RowDataPacket } from "mysql2/promise";
import { User, Review, Token } from "../interfaces/Database";
import bcrypt from "bcrypt";

let pool: Pool | undefined = undefined;

export const connectDB = () => {
  if (!pool)
    pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "Nishishabi123",
      database: "lookahead",
      dateStrings: ["DATETIME"],
      connectionLimit: 10,
    });
  return pool;
};

export async function insertToken(
  user_id: number,
  token_type: string,
  token_value: string,
  created_at: Date | undefined,
  expires_at: Date | undefined
) {
  try {
    if (!created_at) {
      created_at = new Date();
    }

    const connection = connectDB();

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
  } catch (error) {
    throw error;
  }
}

export async function validateToken(token_value: string) {
  try {
    const connection = connectDB();

    const query = `SELECT DISTINCT * FROM Tokens WHERE token_value = '${token_value}'`;
    const [ret_query] = await connection.query<Token[]>(query);

    if (ret_query.length === 0) throw new Error("Token Not Found");

    const ret_token = ret_query[0];
    const expires_at = new Date(ret_token.expires_at);
    const now = new Date();

    return now.getTime() - expires_at.getTime() <= 0;
  } catch (error) {
    throw error;
  }
}

export async function getAdminTokens() {
  try {
    const connection = connectDB();

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
  try {
    const connection = connectDB();

    const query = `SELECT DISTINCT * FROM Users WHERE email = '${email}'`;
    const [ret_query] = await connection.query<User[]>(query);
    return ret_query;
  } catch (error) {
    throw error;
  }
}

export async function searchUserById(id: number) {
  try {
    const connection = connectDB();
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
      columns = "(username, email, image_url)";
      column_values = `('${username}', '${email}', '${imageUrl}')`;
    } else if (password && !imageUrl) {
      columns = "(username, email, password_hash)";
      const password_hash = await bcrypt.hash(password, 10);
      column_values = `('${username}', '${email}', '${password_hash}')`;
    }
    const query = `INSERT INTO Users ${columns} VALUES ${column_values}`;
    await connection.query(query);
  } catch (error) {
    throw error;
  }
}

export async function updatePasswordWithToken(token: string, password: string) {
  try {
    const connection = connectDB();

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
  try {
    const connection = connectDB();
    const query = `DELETE FROM Tokens WHERE token_value = '${value}'`;
    await connection.query(query);
  } catch (error) {
    throw error;
  }
};

export async function getAllReviews() {
  try {
    const connection = connectDB();
    const query = "SELECT * FROM Reviews";
    const [ret_query] = await connection.query<Review[]>(query);
    return ret_query;
  } catch (error) {
    throw error;
  }
}

export async function getReviewsByPlaceId(place_id: string) {
  try {
    const connection = connectDB();

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
