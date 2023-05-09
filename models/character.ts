import { db } from "../database/charart.js";

export class Character {
  private db: {};
  name: string;
  history: string;
  popularity: Number;
  image: string;
  userId: Number;

  constructor(
    name: string,
    history: string,
    popularity: Number,
    image: string,
    userId: Number
  ) {
    this.db = db;
    this.name = name;
    this.history = history;
    this.popularity = popularity;
    this.image = image;
    this.userId = userId;
  }

  getCharacters(): void {
    return db.query("SELECT * FROM characters", [], (err: {}, resuls: {}) => {
      (err: {}, result: {}) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      };
    });
  }

  protected saveCharacter(): void {
    db.query(
      "INSERT INTO characters (name, history, image, user_id) VALUES ($1, $2, $3, $4)",
      [this.name, this.history, this.image, this.userId],
      (err: {}, result: {}) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  }
}
