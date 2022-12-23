"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const OrderControler_1 = require("../controlers/OrderControler");
const OrderRouter = express_1.default.Router();
OrderRouter.post("", auth_middleware_1.authMiddleWare, OrderControler_1.Orders);
exports.default = OrderRouter;
