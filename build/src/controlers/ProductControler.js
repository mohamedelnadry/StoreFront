"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Updateproduct =
  exports.deleteProduct =
  exports.product =
  exports.allproducts =
  exports.createproduct =
    void 0;
const ProducModels_1 = __importDefault(require("../models/ProducModels"));
const productModel = new ProducModels_1.default();
const createproduct = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const createproduct = yield productModel.createproduct(req.body);
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
  });
exports.createproduct = createproduct;
const allproducts = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const allProducts = yield productModel.AllProducts();
      res.status(200).json({
        message: "All Products",
        data: allProducts,
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  });
exports.allproducts = allproducts;
const product = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const productID = Number(req.params.id);
      const viewProduct = yield productModel.GetProductById(productID);
      res.status(200).send(viewProduct);
    } catch (error) {
      throw new Error("check your id");
    }
  });
exports.product = product;
const deleteProduct = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const productID = Number(req.params.id);
      const viewProduct = yield productModel.DeleteProduct(productID);
      res.status(200).send(viewProduct);
    } catch (error) {
      return { err: error };
    }
  });
exports.deleteProduct = deleteProduct;
const Updateproduct = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield productModel
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
  });
exports.Updateproduct = Updateproduct;
