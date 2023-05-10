import { NextFunction, RequestHandler } from "express";
import { Character } from "../models/character.js";
import { User } from "../models/user.js";

export const getCharacters: RequestHandler = async (req, res, next) => {
  try {
    const results = await Character.getAll();
    return res.json(results);
  } catch (error) {
    console.log(error);
  }
};

export const getCharacter: RequestHandler = async (req, res, next) => {
  const id = parseInt(req.params.characterId, 10);
  try {
    const result = await Character.getOne(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const putUpdateCharacter: RequestHandler = async (req, res, next) => {
  const characterId = parseInt(req.params.characterId);
  const name = req.body.name;
  const history = req.body.history;
  const image = req.body.image;
};

// export const postSignup: RequestHandler = async (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   if (!userAlreadyExist) {
//     try {
//       const results = new User(email, password);
//       return res.json(results);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return res.json({ message: "This email is already used ! " });
// };

// const userAlreadyExist = async (email: string) => {
//   try {
//     const result = await User.getOneByEmail(email);
//     if (result) {
//       return true;
//     }
//     return false;
//   } catch (error) {
//     console.log(error);
//   }
// };
