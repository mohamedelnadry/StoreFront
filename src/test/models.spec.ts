import UserModel from "../models/UserModel";
import ProducModels from "../models/ProducModels";
import { Order } from "../types/ordertype";
import OrderModel from "../models/OrderModels";

const orders = new OrderModel();
const productModel = new ProducModels();

const usermodel = new UserModel();
let userID: Number
let productID: Number

const user = {
  First_Name: "ibrhamedq",
  Last_Name: "abdualh",
  Email: `abdsssoaaas${Math.floor(Math.random() * 100)}@mohmg.com`, // i give random number to escape error email already exist
  Password: "123mohamed",
};
describe("test user models defined", () => {
  it("test create user defined functionality", () => {
    expect(usermodel.CreateUser).toBeDefined();
  });
  it("test create user ", async () => {
    const Cuser = await usermodel.CreateUser(user);
    userID = Cuser.User.id
    if (Cuser.error) {
      expect(Cuser.error).toEqual("email already exists");
    } else {
      expect(Cuser.data).toEqual("Created");
    }
  });
  it("test view all users defined", () => {
    expect(usermodel.AllUsers).toBeDefined();
  });
  it("test view all users functionality", async () => {
    const all_users = await usermodel.AllUsers()
    expect(all_users.length).toBeGreaterThan(0);

  });

  it("test view 1 user defined", () => {
    expect(usermodel.GetUserById).toBeDefined();
  });
  it("test view 1 user functionality", async () => {
    const one_user = await usermodel.GetUserById(userID as number)
    expect(one_user.id).toBe(userID);
  });
  it("test delete user defined", () => {
    expect(usermodel.DeleteUSer).toBeDefined();
  });


  it("test Login user defined", async () => {

    const one_user = await usermodel.LoginUser(user)
    expect(one_user.message).toEqual("login successfully");
  });
});
describe("test products models defined", () => {
  it("test create product defined", () => {
    expect(productModel.createproduct).toBeDefined();
  });
  it("test create products functionality", async () => {
    const products = {
      name: "apple watch",
      price: 1500,
    };
    const product = await productModel.createproduct(products);
    
    productID = product.data.id
    expect(product.message).toEqual("Created");
  });
  it("test view all product defined", () => {
    expect(productModel.AllProducts).toBeDefined();
  });
  
  it("test view all product functionality", async() => {
    const all_products = await productModel.AllProducts()
    expect(all_products.length).toBeGreaterThan(0);

  });
  it("test view 1 product defined", () => {
    expect(productModel.GetProductById).toBeDefined();
  });
  it("test view 1 product functionality",async () => {
    const one_user = await productModel.GetProductById(productID as number)
    expect(one_user.id).toEqual(productID);
  });
});
describe("test orders models defined", () => {
  it("test create order defined", () => {
    expect(orders.createorder).toBeDefined();
  });
  it("test create order", async () => {
    const order: Order = {
      product_id: [1, 3, 2, 3],
      count: 54,
      user_id: userID as number,
      on_active: true,
    };
    const Orders = await orders.createorder(order);
    expect(Orders).toEqual({ massage: "created Order" });
  });
});
  // it("test delete user functionality", async () => {
  //   const one_user = await usermodel.DeleteUSer(userID as number)
  //   expect(one_user).toEqual({
  //     "message": "deleted"
  //   });
  // });
