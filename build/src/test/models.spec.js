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
const UserModel_1 = __importDefault(require("../models/UserModel"));
const ProducModels_1 = __importDefault(require("../models/ProducModels"));
const OrderModels_1 = __importDefault(require("../models/OrderModels"));
const orders = new OrderModels_1.default();
const productModel = new ProducModels_1.default();
const usermodel = new UserModel_1.default();
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
    it("test create user", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {
            First_Name: "ibrhamedq",
            Last_Name: "abdualh",
            Email: "abdo@mohmg.com",
            Password: "123mohamed",
        };
        const Cuser = yield usermodel.CreateUser(user);
        console.log(Cuser);
        expect(Cuser).toEqual("Created");
    }));
    it("test create products", () => __awaiter(void 0, void 0, void 0, function* () {
        const products = {
            name: "apple watch",
            price: 1500,
        };
        const product = yield productModel.createproduct(products);
        console.log(product);
        expect(product).toEqual("Created");
    }));
    it("test create order", () => __awaiter(void 0, void 0, void 0, function* () {
        const order = {
            product_id: [1, 3, 2, 3],
            count: 54,
            user_id: 1,
            on_active: true,
        };
        const Orders = yield orders.createorder(order);
        console.log(Orders);
        expect(Orders).toEqual({ massage: "created Order" });
    }));
});
