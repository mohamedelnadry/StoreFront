import { NextFunction, Request, Response } from "express";

import OrderModel from "../models/OrderModels";

const orders = new OrderModel();

export const Orders = async (req: Request, res: Response) => {
  const data = req.body;
  
  const createorder = await orders.createorder(data);
  res.send(createorder);
};
