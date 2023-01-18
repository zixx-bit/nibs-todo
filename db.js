const Pool = require ("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "kth18822",
  host: "localhost",
  port: 5432,
  database: "todo"
});


module.exports = pool;
