import { NextFunction, RequestHandler } from "express";
import { Character } from "../models/character.js";

export const getCharacters: RequestHandler = async (req, res, next) => {
  try {
    const results = await Character.getAll();
    return res.json(results);
  } catch (error) {
    console.log(error);
  }
};
