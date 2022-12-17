import express from "express";
import { loginuser } from "../controlers/LoginControler";
const loginrouts = express.Router();

loginrouts.post("", loginuser);

export default loginrouts;
