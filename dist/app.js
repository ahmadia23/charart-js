import express from "express";
const app = express();
import { charactersRoutes } from "./routes/characters.js";
app.use(charactersRoutes);
app.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});
