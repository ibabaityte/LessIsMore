// model import
import CartItem from "../models/cartItem.js";

const create = async (req, res) => {
    let item = await CartItem.findOne({"productId": req.body.productId, "size": req.body.size, "quantity": req.body.quantity}).exec();

    if(item) {
        res.status(409).send({
            code: "409",
            message: "This product is already in your cart"
        });
    } else {
        const newCartItem = new CartItem ({
            userId: req.body.userId,
            productId: req.body.productId,
            size: req.body.size,
            quantity: req.body.quantity
        });
        newCartItem.save().then(data => {
            res.status(200).send({
                code: "200",
                message: "Product successfully added to cart",
                data: data
            });
        }).catch(err => {
            res.status(500).send({
                code: "500",
                message: "There was some error while adding a product to cart. Try again. "
            });
        });
    }
};

const list = (req, res) => {
    CartItem.find({"userId": req.headers.userid}).populate("productId").then(result => {
        return res.status(200).send({
            code: "200",
            message: "Cart item",
            data: result
        });
    }).catch(err => {
        res.status(500).send({
            code: "500",
            message: "There was an error while trying to retrieve your cart items"
        });
    });
}

const remove = (req, res) => {
    CartItem.findByIdAndRemove(req.headers.cartitemid).then(result => {
        res.status(200).send({
            code: "200",
            message: "Product successfully removed from cart"
        });
    }).catch(err => {
        res.status(500).send({
            code: "500",
            message: "There was an error while removing this item from your cart. Try again."
        });
    });
}

const updateQuantity = (req, res) => {
    CartItem.findByIdAndUpdate(req.body.itemId, {quantity: req.body.quantity}).then(result => {
        res.status(200).send({
            data: result.data
        });
    }).catch(err => {
        res.status(500).send({
            code: "500",
            message: "An error occurred while updating product quantity. Try again."
        });
    });
}

export default {create, list, remove, updateQuantity};