import UserModel from "../models/UserModel";
import ProducModels from "../models/ProducModels";
import { Order } from "../types/ordertype";
import OrderModel from "../models/OrderModels";

const orders = new OrderModel();
const productModel = new ProducModels();

const usermodel = new UserModel();

describe("test user models defined", () => {
  it("test create user defined", () => {
    expect(usermodel.CreateUser).toBeDefined();
  });
  it("test view all user defined", () => {
    expect(usermodel.AllUsers).toBeDefined();
  });
  it("test view 1 user defined", () => {
    expect(usermodel.GetUserById).toBeDefined();
  });
  it("test delete user defined", () => {
    expect(usermodel.DeleteUSer).toBeDefined();
  });
  it("test Login user defined", () => {
    expect(usermodel.LoginUser).toBeDefined();
  });
});
describe("test products models defined", () => {
  it("test create product defined", () => {
    expect(productModel.createproduct).toBeDefined();
  });
  it("test view all product defined", () => {
    expect(productModel.AllProducts).toBeDefined();
  });
  it("test view 1 product defined", () => {
    expect(productModel.GetProductById).toBeDefined();
  });
});
describe("test orders models defined", () => {
  it("test create order defined", () => {
    expect(orders.createorder).toBeDefined();
  });
});

describe("test user model", () => {
  it("test create user", async () => {
    const user = {
      First_Name: "ibrhamedq",
      Last_Name: "abdualh",
      Email: "abduledlddesdfddh@mohmg.com",
      Password: "123mohamed",
    };
    const Cuser = await usermodel.CreateUser(user);
    console.log(Cuser);

    expect(Cuser).toEqual("Created");
  });
  it("test create products", async () => {
    const products = {
      name: "apple watch",
      price: 1500,
    };
    const product = await productModel.createproduct(products);
    console.log(product);

    expect(product).toEqual("Created");
  });
  it("test create order", async () => {
    const order: Order = {
      product_id: [1, 3, 2, 3],
      count: 54,
      user_id: 1,
      on_active: true,
    };
    const Orders = await orders.createorder(order);
    console.log(Orders);

    expect(Orders).toEqual({ massage: "created Order" });
  });
});
