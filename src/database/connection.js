import mysql from "mysql2/promise";

let conn = null;

export const createConnection = async () => {
  if (!conn) {
    conn = mysql.createPool({
      host: process.env.DB_HOST,
      password: process.env.DB_PASS,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });
  }

  return conn;
};
