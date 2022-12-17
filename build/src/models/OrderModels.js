"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const connectDB_1 = __importDefault(require("../database/connectDB"));
class OrderModel {
  createorder(order) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const Connenction = yield connectDB_1.default.connect();
        const results = yield Connenction.query(
          `INSERT INTO orders (product_id,count,user_id,on_active) VALUES (${order.product_id},${order.count},${order.user_id},${order.on_active}) RETURNING *`
        )
          .then((resp) => {
            return resp.rows[0];
          })
          .catch((err) => {
            return { err: err.detail };
          });
        Connenction.release();
        return results;
      } catch (error) {
        return { err: error };
      }
    });
  }
}
exports.default = OrderModel;
//
