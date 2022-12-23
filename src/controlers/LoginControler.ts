import { NextFunction, Request, Response } from "express";
import UserModel from "../models/UserModel";
const Usermodel = new UserModel();

export const loginuser = async (req: Request, res: Response) => {
  try {
    const result = await Usermodel.LoginUser(req.body).then((resp) => {
      return resp;
    });
    res.send(result);
  } catch (error) {
    return { error: error };
  }
};
