"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const req = (0, supertest_1.default)(server_1.default);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";
const user = {
    First_Name: "ahmed",
    Last_Name: "mohamed",
    Email: `abdsssoaaas${Math.floor(Math.random() * 100)}@mohmg.com`,
    Password: "123mohamed",
};
const product = {
    name: "moza",
    price: 120
};
const order_product = {
    "product_id": [
        1
    ],
    "count": "54",
    "user_id": "1",
    "on_active": true
};
const userID = 1;
const productID = 1;
describe("test user api", () => {
    it("GET request to test users endoint with invalid token", () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidtoken = "aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";
        const response = yield req.get("/user").set("Authorization", invalidtoken);
        expect(response.body.error).toBe("token not valied"); // test invalid token
    }));
    it("GET request to show users with valid token ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield req.get("/user").set("Authorization", token);
        expect(response.body.message).toEqual("All Users"); //show all users
    }));
    it("POST request to create user ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield req.post("/user/createuser").send(user);
        expect(response.body.message.data).toEqual("Created"); // test endpoint /user/createuser
    }));
    it("GET request to show 1 user by id ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield req.get(`/user/${userID}`).set("Authorization", token);
        expect(response.body.message).toEqual("user"); // test endpoint /user/createuser
    }));
});
describe("test products api", () => {
    it("GET request to get all products", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield req.get("/products").set("Authorization", token);
        expect(response.body.message).toEqual("All Products"); // show all products
    }));
    it("POSR request to create product", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield req.post("/products/createproduct").set("Authorization", token).send(product);
        expect(response.body.message.message).toEqual("Created"); // create product
    }));
    it("GET request to view 1 product", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield req.get(`/products/${productID}`).set("Authorization", token);
        expect(response.status).toBe(200); // show one product
    }));
});
describe("test create order api", () => {
    it("POST request to test create_orders", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield req.post("/order").set("Authorization", token).send(order_product);
        console.log(response.body);
        expect(response.body.massage).toEqual("created Order"); // Create order
    }));
});
