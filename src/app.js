import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello" });
});

app.use(express.json());

export default app;
