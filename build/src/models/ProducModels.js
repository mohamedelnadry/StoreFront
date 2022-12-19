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
class ProductModel {
    createproduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Connenction = yield connectDB_1.default.connect();
                const SQL = "INSERT INTO Product (name,price) VALUES ($1,$2) RETURNING *";
                const results = yield Connenction.query(SQL, [
                    product.name,
                    product.price,
                ]);
                Connenction.release();
                return "Created";
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    AllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Connenction = yield connectDB_1.default.connect();
                const SQL = "SELECT * FROM product";
                const AllProducts = yield Connenction.query(SQL);
                Connenction.release();
                return AllProducts.rows;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    GetProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield connectDB_1.default.connect();
                const sql = "SELECT * FROM Product WHERE id=($1)";
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Can't find product ${id}, ${err.message}`);
            }
        });
    }
}
exports.default = ProductModel;
