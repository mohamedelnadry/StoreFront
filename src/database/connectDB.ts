import { Pool } from "pg";
import config from "../configration/config";

const pool = new Pool({
  database: config.database,
  host: config.host,
  password: config.password,
  port: config.dbPort,
  user: config.user,
});

export default pool;
