import Order from "../models/order.js";

const create = (req, res) => {
    console.log(req.body.items);
    if (!req.body.items) {
        return res.status(400).send({
            code: "400",
            message: "Your cart is empty. Please add items to your shopping cart."
        });
    }

    const newOrder = new Order({
        userId: req.decodedToken.userId,
        items: req.body.items,
        comment: req.body.comment
    });

    newOrder.save().then(data => {
        res.status(200).send({
            code: "200",
            message: "New order is complete",
            data: data
        });
    }).catch(err => {
        res.status(500).send({
            code: "500",
            message: err.message || "Some error occurred while creating an order"
        });
    });
}

const list = (req, res) => {
    // console.log(req.query.order);
    Order
        .find({'userId': req.decodedToken.userId})
        .populate("userId", "email firstName lastName phoneNumber city street buildingNumber postalCodeail firstName lastName phoneNumber city street buildingNumber postalCode")
        .populate("items", )
        .then(data => {
        res.status(200).send(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            code: "500",
            message: "An error occurred while retrieving your entries"
        });
    });
};

const remove = (req, res) => {
    Order.findByIdAndRemove(req.params.id).then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.id
            });
        }
        res.status(200).send({
            message: "Order deleted successfully"
        });
    }).catch(err => {
        console.log(err);
        if(err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "Order not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete this order"
        });
    });
};

export default {create, list, remove};