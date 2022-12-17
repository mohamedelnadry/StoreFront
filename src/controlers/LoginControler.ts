import { NextFunction, Request, Response } from "express";
import UserModel from "../models/UserModel";
const Usermodel = new UserModel();

export const loginuser = async (req: Request, res: Response) => {
  const result = await Usermodel.LoginUser(req.body).then((resp) => {
    return resp;
  });
  res.send(result);
};
