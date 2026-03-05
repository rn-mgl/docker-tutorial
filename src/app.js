import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello", success: true, object: "test 2s" });
});

app.use(express.json());

export default app;
