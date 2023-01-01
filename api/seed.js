import mongoose from "mongoose";
import Product from "./src/models/product.js";
import User from "./src/models/user.js";
import {productsToSeed} from "./productsToSeed.js";
import bcrypt from "bcrypt";

mongoose.connect(`mongodb://127.0.0.1:27017/lessismore`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully connected to database");
    }
});

const addProducts = async () => {
    await Product.deleteMany();
    await Product.insertMany(productsToSeed);
}

const initAdmin = async () => {
    await User.findOne({userType: "ADMIN"}).then(data => {
        if (!data) {
            bcrypt.hash("admin123", 10, (err, hash) => {
                if (err) {
                    console.log(err.message);
                    mongoose.connection.close();
                } else {
                    //create new user
                    const newUser = new User({
                        email: "admin123@admin123.com",
                        password: hash,
                        userType: "ADMIN"
                    });
                    //save user in database
                    newUser.save().then(() => {
                        console.log("Admin created");
                        mongoose.connection.close();
                    }).catch(err => {
                        console.log(err, "Some error occurred while trying to create this user");
                    });
                }
            });
        } else {
            mongoose.connection.close();
        }
    })
}

const seedDB = () => {
    addProducts().catch(err => console.log(err));
    initAdmin().catch(err => console.log(err));

}

seedDB();


