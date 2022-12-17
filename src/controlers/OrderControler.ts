import { NextFunction, Request, Response } from "express";

import OrderModel from "../models/OrderModels";

const orders = new OrderModel();

export const Orders = async (req: Request, res: Response) => {
  const data = req.body;
  const Orders = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const createorder = await orders.createorder(element);
    Orders.push(createorder);
  }
  res.send(Orders);
};
