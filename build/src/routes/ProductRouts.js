"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const ProductControler_1 = require("../controlers/ProductControler");
const PRODUCTrouter = express_1.default.Router();
PRODUCTrouter.post("/createproduct", auth_middleware_1.authMiddleWare, ProductControler_1.createproduct);
PRODUCTrouter.get("", auth_middleware_1.authMiddleWare, ProductControler_1.allproducts);
PRODUCTrouter.get("/:id", auth_middleware_1.authMiddleWare, ProductControler_1.product);
exports.default = PRODUCTrouter;
