import express from "express";
import cors from "cors";
const app = express();

import charactersRoutes from "./routes/characters.js";

app.use(charactersRoutes);
app.get("/", (req, res) => {
  res.send("hello world");
});

export const add = (a: number, b: number): string => {
  return (a + b).toString();
};

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
