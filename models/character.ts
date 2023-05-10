import { QueryResult } from "pg";
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

  static async getAll(): Promise<QueryResult> {
    const res = await db.query("SELECT * FROM characters", []);
    return res;
  }

  protected async save(): Promise<QueryResult> {
    const result = await db.query(
      "INSERT INTO characters (name, history, image, user_id) VALUES ($1, $2, $3, $4)",
      [this.name, this.history, this.image, this.userId]
    );
    return result;
  }

  static async getOne(id: Number): Promise<QueryResult> {
    const result = await db.query("SELECT * FROM characters WHERE id=$1", [id]);
    return result;
  }

  // protected async update(id: Number): Promise<QueryResult> {
  //   const result = await db.query("UPDATE ")
  // }

  protected async delete(id: Number): Promise<QueryResult> {
    const result = await db.query("DELETE * FROM characters WHERE id=$1", [id]);
    return result;
  }
}
