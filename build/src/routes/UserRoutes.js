"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const UserControler_1 = require("../controlers/UserControler");
const USERrouter = express_1.default.Router();
USERrouter.post("/createuser", UserControler_1.createuser);
USERrouter.get("", auth_middleware_1.authMiddleWare, UserControler_1.allusers);
USERrouter.get("/:id", auth_middleware_1.authMiddleWare, UserControler_1.user);
USERrouter.get(
  "/delete/:id",
  auth_middleware_1.authMiddleWare,
  UserControler_1.deleteUser
);
USERrouter.post(
  "/updateuser",
  auth_middleware_1.authMiddleWare,
  UserControler_1.UpdateUser
);
exports.default = USERrouter;
