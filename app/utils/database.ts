import mysql from "mysql2";
import { Pool } from "mysql2";

let pool: Pool | undefined = undefined;

const connectDB = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "Nishishabi123",
      database: "lookahead",
    });
  }
  return pool;
};

export default connectDB;
