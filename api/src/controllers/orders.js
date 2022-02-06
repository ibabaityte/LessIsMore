// model import
import Order from "../models/order.js";

const create = (req, res) => {
    if (!req.body.cart) {
        return res.status(400).send({
            code: "400",
            message: "Your cart is empty. Please add items to your shopping cart."
        });
    }

    const newOrder = new Order({
        userId: req.decodedToken.userId,
        products: req.body.cart,
        bill: req.body.bill
    });

    newOrder.save().then(data => {
        res.status(200).send({
            code: "200",
            message: "New order is complete",
            data: data
        });
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            code: "500",
            message: "Some error occurred while creating an order"
        });
    });
}

const list = (req, res) => {
    Order
        .find()
        .populate("userId", "email firstName lastName phoneNumber city street buildingNumber postalCode")
        .populate("products.product",)
        .then(data => {
            res.status(200).send({
                code: "200",
                data: data
            });
        }).catch((err) => {
        console.log(err);
        res.status(500).send({
            code: "500",
            message: "An error occurred while retrieving your entries"
        });
    });
};

const remove = (req, res) => {
    Order.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            return res.status(404).send({
                code: "404",
                message: "Order not found with id " + req.params.id
            });
        }
        res.status(200).send({
            code: "200",
            message: "Order deleted successfully"
        });
    }).catch(err => {
        console.log(err);
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                code: "404",
                message: "Order not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            code: "500",
            message: "Could not delete this order"
        });
    });
};

export default {create, list, remove};