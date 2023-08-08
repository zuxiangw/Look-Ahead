import mysql from "mysql2/promise";
import { Pool } from "mysql2/promise";
import { RowDataPacket } from "mysql2/promise";
import bcrypt from "bcrypt";

let pool: Pool | undefined = undefined;

export const connectDB = () => {
  pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Nishishabi123",
    database: "lookahead",
    dateStrings: ["DATETIME"],
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
}

export async function validateToken(token_value: string) {
  const connection = connectDB();

  const query = `SELECT DISTINCT * FROM Tokens WHERE token_value = '${token_value}'`;
  const [ret_query] = (await connection.query(query)) as RowDataPacket[];

  if (ret_query.length === 0) throw new Error("Token Not Found");

  const ret_token = ret_query[0];
  const expires_at = new Date(ret_token.expires_at);
  const now = new Date();
  console.log(ret_token);
  return now.getTime() - expires_at.getTime() <= 0;
}

export async function getAdminTokens() {
  const connection = connectDB();

  const access_query =
    "SELECT * FROM Tokens WHERE user_id = 1 AND token_type = 'access'";
  const [access_query_rows] = await connection.query<RowDataPacket[]>(
    access_query
  );
  const access_token = access_query_rows[0]?.token_value;

  const refresh_query =
    "SELECT * FROM Tokens WHERE user_id = 1 AND token_type = 'refresh'";
  const [refresh_query_rows] = await connection.query<RowDataPacket[]>(
    refresh_query
  );
  const refresh_token = refresh_query_rows[0].token_value;

  const tokens = {
    access_token,
    refresh_token,
  };

  return tokens;
}

export async function searchUserByEmail(email: string) {
  const connection = connectDB();

  const query = `SELECT DISTINCT * FROM Users WHERE email = '${email}'`;
  const [ret_query] = await connection.query<RowDataPacket[]>(query);
  return ret_query;
}

export async function searchUserById(id: number) {
  const connection = connectDB();

  const query = `SELECT * FROM Users WHERE id = ${id}`;
  const [ret_query] = await connection.query<RowDataPacket[]>(query);
  return ret_query[0];
}

export async function insertUser(
  username: string,
  email: string,
  password: string | undefined,
  imageUrl: string | undefined
) {
  if (!email) throw new Error("An email is required");

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
  await connection.query<RowDataPacket[]>(query);
}

export async function updatePasswordWithToken(token: string, password: string) {
  const connection = connectDB();

  const token_query = `SELECT * FROM Tokens WHERE token_value = '${token}'`;
  const [token_ret] = (await connection.query(token_query)) as RowDataPacket[];

  const curr_tok = token_ret[0];

  const hash_password = await bcrypt.hash(password, 10);

  const update_query = `UPDATE Users SET password_hash = '${hash_password}' WHERE id = ${curr_tok.user_id}`;

  await connection.query(update_query);
}

export const removeTokenByValue = async (value: string) => {
  const connection = connectDB();

  const query = `DELETE FROM Tokens WHERE token_value = '${value}'`;

  await connection.query(query);
};

export async function getAllReviews() {}
