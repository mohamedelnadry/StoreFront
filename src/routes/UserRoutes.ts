import express from "express";
import { authMiddleWare } from "../middlewares/auth.middleware";
import {
  createuser,
  allusers,
  user,
  deleteUser,
  UpdateUser,
} from "../controlers/UserControler";
const USERrouter = express.Router();

USERrouter.post("/createuser", createuser);
USERrouter.get("", authMiddleWare, allusers);
USERrouter.get("/:id", authMiddleWare, user);
USERrouter.get("/delete/:id", authMiddleWare, deleteUser);
USERrouter.post("/updateuser", authMiddleWare, UpdateUser);

export default USERrouter;
