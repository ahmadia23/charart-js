import pg from "pg";
import { queryResult } from "pg-promise";
const Pool = pg.Pool;

const pool = new Pool({
  user: "ahmadou",
  host: "localhost",
  database: "charart",
  password: ")w3x9KN@",
  port: 5432,
});

export const db = {
  async query(text: string, params: (string | Number)[]) {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("executed query", { text, duration, rows: res.rowCount });
    return res;
  },
};
