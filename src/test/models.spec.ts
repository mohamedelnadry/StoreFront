import UserModel from "../models/UserModel";
import ProducModels from "../models/ProducModels";

import OrderModel from "../models/OrderModels";

const orders = new OrderModel();
const productModel = new ProducModels();

const usermodel = new UserModel();
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
