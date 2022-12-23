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
    res.status(200).send(viewProduct);
  } catch (error) {
    throw new Error("check your id");
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productID = Number(req.params.id);
    const viewProduct = await productModel.DeleteProduct(productID);
    res.status(200).send(viewProduct);
  } catch (error) {
    return { err: error };
  }
};
export const Updateproduct = async (req: Request, res: Response) => {
  try {
    await productModel
      .UpdateProduct(req.body)
      .then((resp) => {
        res.send(resp);
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
