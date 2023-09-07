import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import {UserModel} from "../models/userModel"

export class UserController {
    static async current(req, res) {
        try {
            return res.status(200).send(req.user);
        } catch (err) {
            console.log(err);
            res.status(500).send({error: err.message})
        }
    }
}
