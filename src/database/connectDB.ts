import { Pool } from "pg";
import config from "../configration/config";

let pool;
if (config.env === "test") {
  pool = new Pool({
    database: config.database_test,
    host: config.host,
    password: config.password,
    port: config.dbPort,
    user: config.user,
  });
}

if (config.env === "dev") {
  pool = new Pool({
    database: config.database,
    host: config.host,
    password: config.password,
    port: config.dbPort,
    user: config.user,
  });
}

export default pool;
