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
let userID;
let productID;
const user = {
  First_Name: "ibrhamedq",
  Last_Name: "abdualh",
  Email: `abdsssoaaas${Math.floor(Math.random() * 100)}@mohmg.com`,
  Password: "123mohamed",
};
describe("test user models defined", () => {
  it("test create user defined functionality", () => {
    expect(usermodel.CreateUser).toBeDefined();
  });
  it("test create user ", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const Cuser = yield usermodel.CreateUser(user);
      userID = Cuser.User.id;
      if (Cuser.error) {
        expect(Cuser.error).toEqual("email already exists");
      } else {
        expect(Cuser.data).toEqual("Created");
      }
    }));
  it("test view all users defined", () => {
    expect(usermodel.AllUsers).toBeDefined();
  });
  it("test view all users functionality", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const all_users = yield usermodel.AllUsers();
      expect(all_users.length).toBeGreaterThan(0);
    }));
  it("test view 1 user defined", () => {
    expect(usermodel.GetUserById).toBeDefined();
  });
  it("test view 1 user functionality", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const one_user = yield usermodel.GetUserById(userID);
      expect(one_user.id).toBe(userID);
    }));
  it("test delete user defined", () => {
    expect(usermodel.DeleteUSer).toBeDefined();
  });
  it("test Login user defined", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const one_user = yield usermodel.LoginUser(user);
      expect(one_user.message).toEqual("login successfully");
    }));
});
describe("test products models defined", () => {
  it("test create product defined", () => {
    expect(productModel.createproduct).toBeDefined();
  });
  it("test create products functionality", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const products = {
        name: "apple watch",
        price: 1500,
      };
      const product = yield productModel.createproduct(products);
      productID = product.data.id;
      expect(product.message).toEqual("Created");
    }));
  it("test view all product defined", () => {
    expect(productModel.AllProducts).toBeDefined();
  });
  it("test view all product functionality", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const all_products = yield productModel.AllProducts();
      expect(all_products.length).toBeGreaterThan(0);
    }));
  it("test view 1 product defined", () => {
    expect(productModel.GetProductById).toBeDefined();
  });
  it("test view 1 product functionality", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const one_user = yield productModel.GetProductById(productID);
      expect(one_user.id).toEqual(productID);
    }));
});
describe("test orders models defined", () => {
  it("test create order defined", () => {
    expect(orders.createorder).toBeDefined();
  });
  it("test create order", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const order = {
        product_id: [1, 3, 2, 3],
        count: 54,
        user_id: userID,
        on_active: true,
      };
      const Orders = yield orders.createorder(order);
      expect(Orders).toEqual({ massage: "created Order" });
    }));
});
// it("test delete user functionality", async () => {
//   const one_user = await usermodel.DeleteUSer(userID as number)
//   expect(one_user).toEqual({
//     "message": "deleted"
//   });
// });
