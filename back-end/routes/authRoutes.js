import express from "express";
import { AuthControllers } from "../controllers/authControllers";

const authRoutes = express.Router();

authRoutes
.post('/login', AuthControllers.login)
.post('/register', AuthControllers.register)


export default authRoutes;