import pg from "pg";
const Pool = pg.Pool;
const pool = new Pool({
    user: "ahmadou",
    host: "localhost",
    database: "charart",
    password: ")w3x9KN@",
    port: 5432,
});
export default pool;
