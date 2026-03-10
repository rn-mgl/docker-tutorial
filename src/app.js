import "dotenv/config";
import express from "express";
import { createConnection } from "./database/connection.js";

const app = express();

const db = await createConnection();

app.set("trust proxy", true);

app.get("/", async (req, res) => {
  const [result, fields] = await db.execute(`SELECT * FROM users;`);

  console.log("request made");

  return res.json({
    message: "Hello",
    success: true,
    object: "test",
    users: result,
  });
});

app.use(express.json());

export default app;
