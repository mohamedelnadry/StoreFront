"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const OrderControler_1 = require("../controlers/OrderControler");
// INSERT INTO orders (product_id,count,user_id,on_active) VALUES (1,5,8,true),(2,3,8,true);
const OrderRouter = express_1.default.Router();
OrderRouter.post("", auth_middleware_1.authMiddleWare, OrderControler_1.Orders);
exports.default = OrderRouter;
