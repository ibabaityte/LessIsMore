import React from "react";

const FavoriteProduct = (props) => {

    const {
        title,
        price,
        photo
    } = props;

    return (
        <div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{photo}</div>
        </div>
    );
}

export default FavoriteProduct;