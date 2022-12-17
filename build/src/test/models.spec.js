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
const UserModel_1 = __importDefault(require("../models/UserModel"));
const ProducModels_1 = __importDefault(require("../models/ProducModels"));
const OrderModels_1 = __importDefault(require("../models/OrderModels"));
const orders = new OrderModels_1.default();
const productModel = new ProducModels_1.default();
const usermodel = new UserModel_1.default();
describe("test user model", () => {
  it("test create user", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const user = {
        First_Name: "ibrhamedq",
        Last_Name: "abdualh",
        Email: "abduledlddesdfddh@mohmg.com",
        Password: "123mohamed",
      };
      const Cuser = yield usermodel.CreateUser(user);
      console.log(Cuser);
      expect(Cuser).toEqual("Created");
    }));
  it("test create products", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const products = {
        name: "apple watch",
        price: 1500,
      };
      const product = yield productModel.createproduct(products);
      console.log(product);
      expect(product).toEqual("Created");
    }));
  // it("test create order", async () => {
  //     const order ={
  //         "product_id": 1,
  //         "count": 5,
  //         "user_id": 2,
  //         "on_active": false
  //     }
  //     const Orders = await orders.createorder(order)
  //     console.log(Orders);
  //     expect(Orders).toEqual("Created");
  // });
});
