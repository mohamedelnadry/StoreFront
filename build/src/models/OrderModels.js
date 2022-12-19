"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectDB_1 = __importDefault(require("../database/connectDB"));
// const onj = {
//   "produc_id": [
//     1,
//     3,
//     4,
//     2,
//     3
//   ],
//   "count": "54",
//   "user_id": "1",
//   "on_active": true
// }
class OrderModel {
    createorder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Connenction = yield connectDB_1.default.connect();
                const results = yield Connenction.query(`INSERT INTO orders(count,user_id,on_active)VALUES(${order.count},${order.user_id},${order.on_active}) RETURNING *;`)
                    .then((resp) => {
                    const list_product = order.product_id;
                    for (let index = 0; index < list_product.length; index++) {
                        Connenction.query(`INSERT INTO orderproduct(order_id,product_id) VALUES(${resp.rows[0].id},${list_product[index]}) RETURNING *`).catch((err) => {
                            return { err: err };
                        });
                    }
                    return { massage: "created Order" };
                })
                    .catch((err) => {
                    return { err: err.detail };
                });
                Connenction.release();
                return results;
            }
            catch (error) {
                return { err: error };
            }
        });
    }
}
exports.default = OrderModel;
