// model import
import Product from "../models/product.js";

// util imports
import {inputValidation} from "../utils/validationUtils.js";
import {infoToUpdate} from "../utils/userControllerUtils.js";
import {generateFilterConfig} from "../utils/filterUtils.js";
import cloudinary from "../utils/cloudinaryConfig.js";

const create = async (req, res) => {
    if (!inputValidation(req)) {
        return res.status(400).send({
            code: "400",
            message: "All fields must be completed"
        });
    }

    // uploading image to cloudinary
    const cloudinaryResult = await cloudinary.uploader.upload(req.file.path);

    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: cloudinaryResult.secure_url,
        cloudinaryId: cloudinaryResult.public_id,
        category: req.body.category
    });

    await newProduct.save().then(data => {
        res.status(200).send({
            code: "200",
            message: "New product created",
            data: data
        });
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            code: "500",
            message: "Some error occurred while creating a product"
        });
    });
}

const list = (req, res) => {
    Product.find(generateFilterConfig(req)).then(data => {
        res.status(200).send({
            code: "200",
            data: data
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            code: "500",
            message: "An error occurred while retrieving products"
        });
    });
};

const get = (req, res) => {
    Product.findById(req.params.id).then(data => {
        if (!data) {
            return res.status(404).send({
                message: "Product not found"
            });
        }
        res.status(200).send({
            code: "200",
            data: data
        });
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            message: "An error occurred while retrieving product"
        });
    });
};

const update = async (req, res) => {
    if (!inputValidation(req)) {
        return res.status(400).send({
            code: "400",
            message: "All inputs must be completed. Please complete the missing information"
        });
    }

    Product.findByIdAndUpdate(req.params.id, await infoToUpdate(req), {new: true}).then(data => {
        if (!data) {
            return res.status(404).send({
                code: "404",
                message: "Product not found with id" + req.params.id
            });
        }
        res.status(200).send({
            code: "200",
            message: "Successfully updated product information",
            data: data
        });
    }).catch(err => {
        console.log(err);
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                code: "404",
                message: "Product not found with id" + req.params.id
            });
        }
        return res.status(500).send({
            code: "500",
            message: "Some error occurred while updating product information"
        });
    });
};

const remove = async (req, res) => {
    let product = await Product.findById(req.params.id);
    cloudinary.uploader.destroy(product.cloudinaryId).catch(err => {
        console.log(err)
    });

    Product.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            return res.status(404).send({
                code: "404",
                message: "Product not found with id " + req.params.id
            });
        }
        return res.status(200).send({
            message: "Product deleted successfully"
        });
    }).catch(err => {
        console.log(err);
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                code: "404",
                message: "Product not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            code: "500",
            message: "Could not delete this product"
        });
    });
};

const search = (req, res) => {
    const keyword = req.query.keyword;
    if (keyword === "") {
        return res.status(400).send({
            code: "400",
            message: "Search parameter can not be empty"
        });
    }
    Product.find({'title': {'$regex': keyword, '$options': 'i'}}).then(data => {
        if (data.length === 0) {
            return res.status(404).send({
                message: "No products were found"
            });
        } else {
            res.status(200).send({
                code: "200",
                data: data
            });
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
};

const getCartProducts = (req, res) => {
    Product.find({_id: {$in: req.query.idArray}}).then(result => {
        let objects = {};
        result.forEach(o => objects[o._id] = o);
        let dupArray = req.query.idArray.map(id => objects[id]);
        return res.status(200).send({
            code: "200",
            message: "Cart products fetched successfully",
            data: dupArray
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).send({
            code: "500",
            message: "Something went wrong while retrieving cart products"
        })
    })
}

export default {create, list, get, update, remove, search, getCartProducts};