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
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../configration/config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserModel {
    CreateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Connenction = yield connectDB_1.default.connect();
                const query = yield Connenction.query(`INSERT INTO Users (First_Name,Last_Name,Email,Password) VALUES ('${user.First_Name}','${user.Last_Name}','${user.Email}','${hashPassword(user.Password)}')RETURNING *`)
                    .then((resp) => {
                    const jwtSecretKey = config_1.default.jwt_secret_key;
                    const data = {
                        id: resp.rows[0].id,
                        First_Name: resp.rows[0].First_Name,
                        Last_Name: resp.rows[0].Lirst_Name,
                        Email: resp.rows[0].Email,
                    };
                    const token = jsonwebtoken_1.default.sign(data, jwtSecretKey);
                    return {
                        "data": "Created",
                        "token": token
                    };
                })
                    .catch((err) => {
                    if (err) {
                        return err.message;
                    }
                });
                Connenction.release();
                return query;
            }
            catch (error) {
                return error;
            }
        });
    }
    AllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Connenction = yield connectDB_1.default.connect();
                const SQL = "SELECT * FROM Users";
                const Allusers = yield Connenction.query(SQL);
                Connenction.release();
                return Allusers.rows;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    GetUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield connectDB_1.default.connect();
                // const sql = "SELECT * FROM users WHERE id=($1)";
                const result = yield connection.query(`SELECT * FROM users WHERE id=(${id})`).then(respo => {
                    if (respo.rows[0] == undefined) {
                        return { "error": "user not found" };
                    }
                    return respo.rows[0];
                }).catch(err => {
                    return { "err": err };
                });
                connection.release();
                return result;
            }
            catch (err) {
                throw new Error(`Can't find user ${id}, ${err.message}`);
            }
        });
    }
    DeleteUSer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield connectDB_1.default.connect();
                const sql = "DELETE FROM Users WHERE id=($1)";
                const result = yield connection.query(sql, [id]);
                console.log(result);
                connection.release();
                return {
                    "message": "deleted"
                };
            }
            catch (err) {
                return { "err": err };
            }
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Connenction = yield connectDB_1.default.connect();
                const query = yield Connenction.query(`UPDATE Users SET first_name=${user.First_Name},last_name=${user.Last_Name},password=${user.Password} where email=${user.Email} RETURNING *`)
                    .then((resp) => {
                    return {
                        "data": "Updated",
                        "token": resp.rows[0]
                    };
                })
                    .catch((err) => {
                    if (err) {
                        return err.message;
                    }
                });
                Connenction.release();
                return query;
            }
            catch (error) {
                return { "error": error };
            }
        });
    }
    LoginUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield connectDB_1.default.connect();
                const results = yield connection
                    .query(`SELECT * FROM Users WHERE Email LIKE '${user.Email}'`)
                    .then((resp) => __awaiter(this, void 0, void 0, function* () {
                    if (resp.rowCount == 0) {
                        return { error: "email dosn't match" };
                    }
                    const pass = resp.rows[0].password;
                    const match = yield bcrypt_1.default.compare(user.Password + config_1.default.Pepper, pass);
                    if (match) {
                        // create token
                        const jwtSecretKey = config_1.default.jwt_secret_key;
                        const data = {
                            id: resp.rows[0].id,
                            First_Name: resp.rows[0].First_Name,
                            Last_Name: resp.rows[0].Lirst_Name,
                            Email: resp.rows[0].Email,
                        };
                        const token = jsonwebtoken_1.default.sign(data, jwtSecretKey);
                        return { token: token };
                    }
                    else {
                        return { err: "password dosn't match" };
                    }
                }));
                return results;
            }
            catch (error) {
                return error;
            }
        });
    }
}
const hashPassword = (Password) => {
    const Salt = Number(config_1.default.Salt);
    const Pepper = config_1.default.Pepper;
    return bcrypt_1.default.hashSync(`${Password}${Pepper}`, Salt);
};
exports.default = UserModel;
