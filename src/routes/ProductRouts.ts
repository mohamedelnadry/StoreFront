import express from "express";
import { authMiddleWare } from "../middlewares/auth.middleware";
import {
  createproduct,
  allproducts,
  product,
  deleteProduct,
  Updateproduct,
} from "../controlers/ProductControler";
const PRODUCTrouter = express.Router();

PRODUCTrouter.post("/createproduct", authMiddleWare, createproduct);

PRODUCTrouter.get("", authMiddleWare, allproducts);
PRODUCTrouter.get("/:id", authMiddleWare, product);
PRODUCTrouter.get("/delete/:id", authMiddleWare, deleteProduct);
PRODUCTrouter.post("/updateuser", authMiddleWare, Updateproduct);

export default PRODUCTrouter;
