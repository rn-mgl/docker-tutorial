import express from "express";
import { createConnection } from "./database/connection.js";

const app = express();

const db = await createConnection();

app.get("/", async (req, res) => {
  const [result, fields] = await db.execute(`SELECT * FROM users;`);

  return res.json({
    message: "Hello",
    success: true,
    object: "test",
    users: result,
  });
});

app.use(express.json());

export default app;
