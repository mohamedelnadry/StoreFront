import express from "express";
import { authMiddleWare } from "../middlewares/auth.middleware";
import { Orders } from "../controlers/OrderControler";

const OrderRouter = express.Router();
OrderRouter.post("", authMiddleWare, Orders);

export default OrderRouter;
