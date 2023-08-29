import jwt from "jsonwebtoken"

export class AuthMiddlewares {
    static async isConnected(req, res, next){
        try{
            const { token } = req.cookies;

            if(!token) {
                return res.status(401).send({ message: "No token" });
            }
    
            const jwtSecret = process.env.JWT_SECRET;
    
            if(!jwtSecret) {
                return res.status(500).send({ message: "jwt secret is not defined" });
            }

            req.user = jwt.verify(token, jwtSecret)
    
            next();
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }
}