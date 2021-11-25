import React from "react";

const Product = (props) => {
    const {product} = props;
    return (
        <div>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <img src={product.photo} alt="product"/>
        </div>
    );
}

export default Product;