import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../configration/config";

export const authMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  jwt.verify(
    req.headers.authorization as string,
    config.jwt_secret_key as string,
    function (err, decoded) {
      if (err) {
        res.send({
          error: "token not valied",
        });
      } else {
        console.log("user authenticated Successfully!");
        next();
      }
    }
  );
};
