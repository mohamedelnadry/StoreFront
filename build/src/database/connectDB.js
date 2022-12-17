"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = __importDefault(require("../configration/config"));
const pool = new pg_1.Pool({
  database: config_1.default.database,
  host: config_1.default.host,
  password: config_1.default.password,
  port: config_1.default.dbPort,
  user: config_1.default.user,
});
exports.default = pool;
