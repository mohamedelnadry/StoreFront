import express from "express";
import { authMiddleWare } from "../middlewares/auth.middleware";
import { Orders } from "../controlers/OrderControler";
// INSERT INTO orders (product_id,count,user_id,on_active) VALUES (1,5,8,true),(2,3,8,true);
const OrderRouter = express.Router();
OrderRouter.post("", authMiddleWare, Orders);

export default OrderRouter;
