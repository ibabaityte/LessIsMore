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
            <img style={{width:"300px",height:"300px"}} src={photo} alt="product"/>
        </div>
    );
}

export default FavoriteProduct;