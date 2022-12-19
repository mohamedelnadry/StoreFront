"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LoginControler_1 = require("../controlers/LoginControler");
const loginrouts = express_1.default.Router();
loginrouts.post("", LoginControler_1.loginuser);
exports.default = loginrouts;
