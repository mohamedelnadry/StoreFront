import express from "express";
import { authMiddleWare } from "../middlewares/auth.middleware";
import {
  createproduct,
  allproducts,
  product,
} from "../controlers/ProductControler";
const PRODUCTrouter = express.Router();

PRODUCTrouter.post("/createproduct", authMiddleWare, createproduct);

PRODUCTrouter.get("", authMiddleWare, allproducts);
PRODUCTrouter.get("/:id", authMiddleWare, product);

export default PRODUCTrouter;
