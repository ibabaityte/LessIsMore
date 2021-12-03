import React from "react";

const CartProduct = (props) => {

    const {product} = props;

    return (
        <div>
            <div>{product.title}</div>
            <img src={product.image} style={{width: "300px", height: "300px"}} alt="product"/>
            <div>{product.price}</div>
            <div>{product.product.size}</div>
            <div>{product.product.quantity}</div>
        </div>
    );
};

export default CartProduct;