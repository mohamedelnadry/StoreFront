import supertest from "supertest";
import app from "../server";

const req = supertest(app);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";
const user = {
  First_Name: "ibrhamedq",
  Last_Name: "abdualh",
  Email: `abdsssoaaas${Math.floor(Math.random() * 100)}@mohmg.com`, // i give random number to escape error email already exist
  Password: "123mohamed",
};
const product = {
  name:"moza",
  price:120
}
const order_product = {
  "produc_id": [
    1
  ],
  "count": 54,
  "user_id": 1,
  "on_active": true
}
const userID = 1
const productID=1
describe("test user api", () => {
  it("GET request to test users endoint with invalid token", async () => {
    const invalidtoken =
      "aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";
    const response = await req.get("/user").set("Authorization", invalidtoken);

    expect(response.body.error).toBe("token not valied"); // test invalid token
  });
  it("GET request to show users with valid token ", async () => {
    const response = await req.get("/user").set("Authorization", token);

    expect(response.body.message).toEqual("All Users"); //show all users
  });
  it("POST request to create user ", async () => {
    const response = await req.post("/user/createuser").send(user)
    
    expect(response.body.message.data).toEqual("Created"); // test endpoint /user/createuser
  });
  it("GET request to show 1 user by id ", async () => {
    const response = await req.get(`/user/${userID}`).set("Authorization", token);
    
    expect(response.body.message).toEqual("user"); // test endpoint /user/createuser
  });
});
describe("test products api", () => {
  it("GET request to get all products", async () => {
    const response = await req.get("/products").set("Authorization", token);
    
    expect(response.body.message).toEqual("All Products"); // show all products
  });
  it("POSR request to create product", async () => {
    const response = await req.post("/products/createproduct").set("Authorization", token).send(product);
    
    expect(response.body.message.message).toEqual("Created"); // create product
  });
  it("GET request to view 1 product", async () => {
    const response = await req.get(`/products/${productID}`).set("Authorization", token)
    
    expect(response.status).toBe(200); // show one product
  });
});
describe("test create order api", () => {
  it("POST request to test create_orders", async () => {

    const response = await req.post("/order").set("Authorization", token);
    
    expect(response.status).toBe(200); // Create order
  });
});
