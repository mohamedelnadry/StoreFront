import { NextFunction, Request, Response } from "express";
import ProducModels from "../models/ProducModels";
const productModel = new ProducModels();

export const createproduct = async (req: Request, res: Response) => {
  try {
    const createproduct = await productModel.createproduct(req.body);
    if (createproduct) {
      res.status(200).json({
        message: createproduct,
      });
    } else {
      res.send("wrong data");
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const allproducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await productModel.AllProducts();
    res.status(200).json({
      message: "All Products",
      data: allProducts,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const product = async (req: Request, res: Response) => {
  try {
    const productID = Number(req.params.id);
    const viewProduct = await productModel.GetProductById(productID);
    res.status(200).json({
      message: "product",
      data: viewProduct,
    });
  } catch (error) {
    throw new Error("check your id");
  }
};
