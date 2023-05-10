import { QueryResult } from "pg";
import { db } from "../database/charart.js";

export class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  protected async save(): Promise<QueryResult> {
    const result = await db.query(
      "INSERT INTO users (email, password) VALUES ($1, $2);",
      [this.email, this.password]
    );
    return result;
  }

  async getAll(): Promise<QueryResult> {
    const result = await db.query("SELECT * FROM users;", []);
    return result;
  }

  static async getOneByEmail(email: string): Promise<QueryResult> {
    const result = await db.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    return result;
  }

  protected async delete(id: Number): Promise<QueryResult> {
    const result = await db.query("DELETE * FROM users WHERE id=$1", [id]);
    return result;
  }
}
