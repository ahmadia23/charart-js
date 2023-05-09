import pool from "../database/charart.js";
console.log(pool);
export class Character {
    constructor(id, name, history, popularity, image) {
        this.name = name;
        this.history = history;
        this.popularity = popularity;
        this.image = image;
    }
    static getCharacters;
}
