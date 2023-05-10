import express from "express";
import cors from "cors";
import { charactersRoutes } from "./routes/characters.js";

const app = express();

app.use(charactersRoutes);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
