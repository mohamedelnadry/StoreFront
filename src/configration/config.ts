import dotenv from "dotenv";
dotenv.config();

const {
  PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_DBPort,
  DB_HOST,
  POSTGRES_DB_TEST,
  NODE_ENV,
  SALT,
  PEPPER,
  JWT_SECRET_KEY,
} = process.env;

export default {
  port: PORT,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  database_test: POSTGRES_DB_TEST,
  dbPort: Number(POSTGRES_DBPort),
  host: DB_HOST,
  node_env: NODE_ENV,
  Salt: SALT,
  Pepper: PEPPER,
  jwt_secret_key: JWT_SECRET_KEY,
};
