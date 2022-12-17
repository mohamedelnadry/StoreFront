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
exports.Orders = void 0;
const OrderModels_1 = __importDefault(require("../models/OrderModels"));
const orders = new OrderModels_1.default();
const Orders = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const Orders = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      const createorder = yield orders.createorder(element);
      Orders.push(createorder);
    }
    res.send(Orders);
  });
exports.Orders = Orders;