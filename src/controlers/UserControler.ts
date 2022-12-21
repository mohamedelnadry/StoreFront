import { NextFunction, Request, Response } from "express";

import UserModel from "../models/UserModel";
const Usermodel = new UserModel();

export const createuser = async (req: Request, res: Response) => {
  try {
    await Usermodel.CreateUser(req.body)
      .then((resp) => {
        res.json({
          message: resp,
        });
      })
      .catch((err) => {
        res.send({
          err: err,
        });
      });
  } catch (error) {
    res.send(`${error}`);
  }
};

export const allusers = async (req: Request, res: Response) => {
  try {
    const allusers = await Usermodel.AllUsers();
    res.status(200).json({
      message: "All Users",
      data: allusers,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const user = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);
    const viewUser = await Usermodel.GetUserById(userId);
    res.status(200).json({
      message: "user",
      data: viewUser,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);
    const viewUser = await Usermodel.DeleteUSer(userId);
    res.status(200).send(viewUser);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
export const UpdateUser = async (req: Request, res: Response) => {
  try {
    await Usermodel.updateUser(req.body)
      .then((resp) => {
        res.json({
          message: resp,
        });
      })
      .catch((err) => {
        res.send({
          err: err,
        });
      });
  } catch (error) {
    res.send(`${error}`);
  }
};
