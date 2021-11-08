// model import
import Product from "../models/product.js";

// util imports
import {inputValidation} from "../utils/validationUtils.js";
import {infoToUpdate} from "../utils/userControllerUtils.js";

const create = (req, res) => {
    if (!inputValidation(req)) {
        return res.status(400).send({
            code: "400",
            message: "All fields must be completed"
        });
    }

    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description
    });

    newProduct.save().then(data => {
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
    Product.find({"userType": "USER"})
        .then(data => {
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

const update = (req, res) => {
    if (!inputValidation(req)) {
        return res.status(400).send({
            code: "400",
            message: "All inputs must be completed. Please complete the missing information"
        });
    }

    Product.findByIdAndUpdate(req.params.id, infoToUpdate(req), {new: true}).then(data => {
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

const remove = (req, res) => {
    Product.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            return res.status(404).send({
                code: "404",
                message: "Product not found with id " + req.params.id
            });
        }
        res.status(200).send({
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

export default {create, list, get, update, remove};