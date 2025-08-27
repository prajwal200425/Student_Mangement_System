import express from "express"
import { Login, Register } from "../Controller/UserController.js";

const UserRouter = express.Router();

UserRouter.post("/register" , Register);
UserRouter.post("/login", Login);

export default UserRouter;