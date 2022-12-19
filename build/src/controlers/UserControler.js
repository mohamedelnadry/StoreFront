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
exports.deleteUser = exports.user = exports.allusers = exports.createuser = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const Usermodel = new UserModel_1.default();
const createuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Usermodel.CreateUser(req.body)
            .then((resp) => {
            res.json({
                message: resp,
            });
        })
            .catch((err) => {
            res.send({
                err: err,
            });
        });
    }
    catch (error) {
        res.send(`${error}`);
    }
});
exports.createuser = createuser;
const allusers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allusers = yield Usermodel.AllUsers();
        res.status(200).json({
            message: "All Users",
            data: allusers,
        });
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.allusers = allusers;
const user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.id);
        const viewUser = yield Usermodel.GetUserById(userId);
        res.status(200).json({
            message: "user",
            data: viewUser,
        });
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.user = user;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.id);
        const viewUser = yield Usermodel.DeleteUSer(userId);
        res.status(200).json({
            message: "deleted",
            data: viewUser,
        });
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.deleteUser = deleteUser;
