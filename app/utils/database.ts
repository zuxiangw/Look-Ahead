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

export async function validateResetToken(token_value: string) {
  const connection = connectDB();

  const query = `SELECT DISTINCT * FROM Tokens WHERE token_value = '${token_value}'`;
  const [ret_query] = await connection.query(query);

  return ret_query;
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

export async function searchUserByNameNEmail(
  username: string | undefined,
  email: string | undefined
) {
  if (!username && !email) {
    return new Error("Username AND Email not provided");
  }

  const connection = connectDB();

  let where;
  if (username && email)
    where = `username = '${username}' OR email = '${email}'`;
  else if (!username) where = `email = '${email}'`;
  else where = `username = '${username}'`;

  const query = `SELECT DISTINCT * FROM Users WHERE ${where}`;
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
  password: string
) {
  if (!username || !email || !password)
    throw new Error("All credentials required");

  const connection = connectDB();

  const password_hash = await bcrypt.hash(password, 10);
  const query = `INSERT INTO Users (username, email, password_hash) VALUES ('${username}', '${email}', '${password_hash}')`;
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

export const removeTokenById = async (id: number) => {
  const connection = connectDB();

  const query = `DELETE FROM Tokens WHERE id = ${id}`;

  await connection.query(query);
};
