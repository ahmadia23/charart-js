import { Character } from "../models/character.js";
export const getCharacters = async (req, res, next) => {
    try {
        const results = await Character.getAll();
        return res.json(results);
    }
    catch (error) {
        console.log(error);
    }
};
