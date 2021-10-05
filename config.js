const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "demo-school",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
