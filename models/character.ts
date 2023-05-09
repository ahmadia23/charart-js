import { db } from "../database/charart.js";

export interface Character {
  id: number;
  name: string;
  history: string;
  popularity: Number;
  image: string;
}

export class Character {
  private db: any = {};

  constructor(
    id: number,
    name: string,
    history: string,
    popularity: Number,
    image: string
  ) {
    this.db = db;
    this.name = name;
    this.history = history;
    this.popularity = popularity;
    this.image = image;
  }
}
