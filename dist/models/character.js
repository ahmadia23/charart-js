import { db } from "../database/charart.js";
export class Character {
    db;
    name;
    history;
    popularity;
    image;
    userId;
    constructor(name, history, popularity, image, userId) {
        this.db = db;
        this.name = name;
        this.history = history;
        this.popularity = popularity;
        this.image = image;
        this.userId = userId;
    }
    static async getAll() {
        const res = await db.query("SELECT * FROM characters", []);
        return res;
    }
    save() {
        // db.query(
        //   "INSERT INTO characters (name, history, image, user_id) VALUES ($1, $2, $3, $4)",
        //   [this.name, this.history, this.image, this.userId],
        //   (err: {}, result: result) => {
        //     if (err) {
        //       console.log(err);
        //     }
        //     console.log(result.rows);
        //   }
        // );
    }
}
