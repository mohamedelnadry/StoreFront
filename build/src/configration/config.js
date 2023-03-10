"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const {
  PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_DBPort,
  DB_HOST,
  POSTGRES_DB_TEST,
  ENV,
  SALT,
  PEPPER,
  JWT_SECRET_KEY,
} = process.env;
exports.default = {
  port: PORT,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  database_test: POSTGRES_DB_TEST,
  dbPort: Number(POSTGRES_DBPort),
  host: DB_HOST,
  env: ENV,
  Salt: SALT,
  Pepper: PEPPER,
  jwt_secret_key: JWT_SECRET_KEY,
};
