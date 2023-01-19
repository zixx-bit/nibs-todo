const Pool = require ("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "zixx13060",
  host: "localhost",
  port: 5432,
  database: "todo"
});

module.exports = pool;
