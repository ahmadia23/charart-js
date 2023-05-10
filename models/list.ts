import { db } from "../database/charart.js";
import { QueryResult } from "pg";

export class List {
  name: string;
  private user_id: Number;

  constructor(name: string, userId: Number) {
    this.name = name;
    this.user_id = userId;
  }

  protected async save(): Promise<QueryResult> {
    const result = await db.query(
      "INSERT INTO lists (name, user_id) VALUES ($1, $2)",
      [this.name, this.user_id]
    );
    return result;
  }

  protected async delete(id: Number): Promise<QueryResult> {
    const result = await db.query("DELETE * FROM lists WHERE id=$1", [id]);
    return result;
  }
}
