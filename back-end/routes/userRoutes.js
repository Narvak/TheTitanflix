import express from "express";
import { AuthControllers } from "../controllers/authControllers";
import {AuthMiddlewares} from "../middleware/authMiddlewares";
import {UserController} from "../controllers/userController";

const userRoutes = express.Router();

userRoutes
    .get('/current', AuthMiddlewares.isConnected, UserController.current)


export default userRoutes;
