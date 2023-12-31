import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import {UserModel} from "../models/userModel"

export class AuthControllers {
    static async login(req, res) {
        try {
            const {email, password} = req.body;

            const user = await UserModel.findOne({email});

            if (!user) {
                return res.status(404).send({
                    message: `User (${email}) is not found !`
                })
            }

            const isCorrectPassword = bcrypt.compareSync(password, user.password);

            if (!isCorrectPassword) {
                return res.status(201).send({
                    message: "Email or password are incorrect !"
                })
            }

            const jwtSecret = process.env.JWT_SECRET;

            if (!jwtSecret) {
                return res.status(500).send({message: "jwt secret is not defined"});
            }

            const maxAge = 60 * 60 * 24 * 1000;

            const token = jwt.sign(
                {
                    userId: user._id,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    role: user.role,
                },
                jwtSecret,
                {expiresIn: maxAge}
            )

            res.cookie("token", token, {
                maxAge,
            })

            return res.status(200).send({user});
        } catch (err) {
            console.log(err);
            res.status(500).send({error: err.message})
        }
    }

    static async register(req, res) {
        try {
            const {username, email, password, phone, role} = req.body;

            const salt = bcrypt.genSaltSync(10)
            const hashPassword = bcrypt.hashSync(password, salt)

            const user = await UserModel.create({
                username,
                email,
                password: hashPassword,
                phone,
                ...(role && {role})
            });

            await AuthControllers.login(req, res);

            res.status(201).send({
                data: user,
                message: "User created !"
            })
        } catch (err) {
            console.log(err);
            res.status(500).send({error: err.message})
        }
    }

    static async logout(req, res) {
        try {
            res.cookie("token", "", {
                maxAge: 1,
            })

            return res.status(200).send({message: "User logged out !"});
        } catch (err) {
            console.log(err);
            res.status(500).send({error: err.message})
        }
    }
}
