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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const req = (0, supertest_1.default)(server_1.default);
describe("test user api", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";
  it("test user endoint with invalid token", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const invalidtoken =
        "aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";
      const response = yield req
        .get("/user")
        .set("Authorization", invalidtoken);
      expect(response.body.error).toBe("token not valied"); // test endpoint /user/createuser
    }));
  it("show users with valid token ", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield req.get("/user").set("Authorization", token);
      expect(response.status).toBe(200); // test endpoint /user/createuser
    }));
});
describe("test products api", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";
  it("test all products ", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield req.get("/products").set("Authorization", token);
      expect(response.status).toBe(200); // show all users
    }));
});
describe("test create order api", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY3MTIzMjk4MH0.4TqjPvHtNENdcYX4j_X6E962Tpr0uMAKkZC00LQ2hDM";
  it("test orders", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield req
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
    }));
});
// it("tes resize img function", async () => {
//   const img = "test.jpg";
//   const width = 400;
//   const heght = 400;
//   const resizeiIMG = await resizeimg(img, width, heght);
//   expect(resizeiIMG).toBe(true);
// });
