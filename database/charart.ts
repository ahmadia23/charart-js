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
  query: (text: string, params: [], cb: () => {}) =>
    pool.query(text, params, cb),
};
