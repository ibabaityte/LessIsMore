import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import {infoToUpdate, userUpdateValidation} from "../utils/userControllerUtils.js";
const secretKey = process.env.JWT_SECRET;

const register = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({
            code: "400",
            message: "Username and password can not be empty."
        });
    }

    const number = /\d/;
    if(!number.test(req.body.password)){
        return res.status(400).send({
            code: "400",
            message: "Password has to contain at least one number."
        });
    }

    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailFormat.test(String(req.body.email).toLowerCase())){
        return res.status(400).send({
            code: "400",
            message: "You have entered an invalid email address. Try again."
        });
    }

    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            return res.status(409).send({
                code: "409",
                message: "A user with this email already exists. Try again."
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        code: "500",
                        message: "Something went wrong during register. Try again."
                    });
                } else {
                    //create new user
                    const newUser = new User({
                        email: req.body.email,
                        password: hash
                    });
                    //save user in database
                    newUser.save()
                        .then(data => {
                            res.send(data);
                        }).catch(() => {
                        res.status(500).send({
                            code: "500",
                            message: "Something went wrong during register. Try again."
                        });
                    });
                }
            });
        }
    });
};

const login = (req, res) => {
    User.findOne({email: req.body.email}).then(user => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({
                code: "400",
                message: "Username and password can not be empty."
            });
        }

        if (!user) {
            return res.status(401).send({
                message: "There is no such user. Try again."
            });
        } else {
            bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    if (result) {
                        const token = jwt.sign({
                            email: user.email,
                            userId: user._id,
                            userType: user.userType,
                            expirationTimestamp: Date.now()
                        }, secretKey, {
                            expiresIn: "1h"
                        });
                        // console.log(token);
                        return res.status(200).send({
                            message: "Logged in successfully.",
                            token: token,
                            userId: user._id,
                            userType: user.userType,
                            email: user.email,
                            expirationTimestamp: Date.now() + 1000 * 60 * 60
                        });
                    } else {
                        res.status(401).send({
                            code: "401",
                            message: "Something went wrong during login. Try again."
                        });
                    }
                })
                .catch(() => {
                    res.status(500).send({
                        code: "500",
                        message: "Something went wrong during login. Try again."
                    });
                });
        }
    });
};

const get = (req, res) => {
    User.findById(req.params.userId).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        res.status(200).send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving users"
        });
    });
};

const remove = (req, res) => {
    User.findByIdAndRemove(req.params.userId).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        res.status(200).send({message: "User profile deleted successfully"});
    }).catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "User not found"
            });
        }
        return res.status(500).send({
            message: "Could not delete this users profile"
        });
    });
};

const update = (req, res) => {
    if (userUpdateValidation(req) === false) {
        return res.status(400).send({
            code: "400",
            message: "All inputs must be completed. Please complete the required information."
        });
    }
    User.findByIdAndUpdate(req.params.userId, infoToUpdate(req), {new: true}).then(user => {
        if (!user) {
            return res.status(404).send({
                code: "404",
                message: "User not found with id " + req.params.userId
            });
        }
        res.status(200).send({
            code: "200",
            message: "Successfully updated your contact information",
            data: user
        });
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                code: "404",
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            code: "500",
            message: "Some error occurred while updating your contact information"
        });
    });
};

const init = (req, res) => {
    User.findOne({userType: "ADMIN"}).then(user => {
        if (!user) {
            bcrypt.hash("admin123", 10, (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        message: err.message
                    });
                } else {
                    //create new users
                    const newUser = new User({
                        email: "admin123@admin123.com",
                        password: hash,
                        userType: "ADMIN"
                    });
                    //save users in database
                    newUser.save().then(data => {
                        return res.send(data);
                    }).catch(err => {
                        return res.send({
                            message: err.message
                        });
                    });
                }
            });
        } else {
            return res.send({
                message: "User already exists"
            });
        }
    });
}

const listAllUsers = (req, res) => {
    User.find({userType: "ADMIN"}).then(user => {
        res.status(200).send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all users entries"
        });
    });
}

export default {register, login, get, remove, update, init, listAllUsers};