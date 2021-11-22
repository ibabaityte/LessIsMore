import React from "react";

const ProductCard = (props) => {

    const {
        title,
        price,
        photo
    } = props;

    return (
        <div>
            <div>{title}</div>
            <div>{price}</div>
            <img style={{width: "300px", height: "300px"}} src={photo} alt="product"/>
            <button>Add to cart</button>
        </div>
    );
}

export default ProductCard;