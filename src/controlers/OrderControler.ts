import { NextFunction, Request, Response } from "express";

import OrderModel from "../models/OrderModels";

const orders = new OrderModel();

export const Orders = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    
    const createorder = await orders.createorder(data);
    res.send(createorder);
  } catch (error) {
    return { "error": error }
  }

};