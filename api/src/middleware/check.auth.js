import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

export default async (req, res, next) => {
    try {
        req.decodedToken = jwt.verify(req.headers.authorization, secretKey);
        next();
    } catch {
        return res.status(401).send({
            message: "Auth failed"
        });
    }
};