import supertest from "supertest";
import app from "../server";

const req = supertest(app);
describe("test user api", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";

  it("test user endoint with invalid token", async () => {
    const invalidtoken =
      "aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";
    const response = await req.get("/user").set("Authorization", invalidtoken);

    expect(response.body.error).toBe("token not valied"); // test endpoint /user/createuser
  });
  it("show users with valid token ", async () => {
    const response = await req.get("/user").set("Authorization", token);

    expect(response.status).toBe(200); // test endpoint /user/createuser
  });
});
describe("test products api", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";

  it("test all products ", async () => {
    const response = await req.get("/products").set("Authorization", token);

    expect(response.status).toBe(200); // show all users
  });
});
describe("test create order api", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";

  it("test orders", async () => {
    const response = await req
      .post("/order")
      .send([
        {
          product_id: 1,
          count: 5,
          user_id: 222,
          on_active: false,
        },
        {
          product_id: 1,
          count: 5,
          user_id: 8,
          on_active: true,
        },
      ])
      .set("Authorization", token);
    expect(response.status).toBe(200); // show all users
  });
});
