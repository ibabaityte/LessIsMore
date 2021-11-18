// package import
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// constants from env file
const secretKey = process.env.JWT;

// checking if logged in user is an admin to be able to make specific requests only admin can make
export default async (req, res, next) => {
    try {
        req.decodedToken = jwt.verify(req.headers.authorization, secretKey);
        if (req.decodedToken.userType === "ADMIN") {
            next();
        } else {
            return res.status(401).send({
                message: "Auth failed"
            });
        }
    } catch (error) {
        return res.status(401).send({
            message: "Auth failed"
        });
    }
};

