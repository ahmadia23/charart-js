"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const characters_1 = __importDefault(require("./routes/characters"));
app.use(characters_1.default);
app.get("/", (req, res) => {
    res.send("hello world");
});
const add = (a, b) => {
    return (a + b).toString();
};
exports.add = add;
app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});
