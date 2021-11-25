import React from "react";
import {Link} from "react-router-dom";

const ProductCard = (props) => {

    const {
        product,
        setSelectedProduct,
        title,
        price,
        photo,
    } = props;

    return (
        <div>
            <Link to="/product" onClick={() => {setSelectedProduct(product)}}>{title}</Link>
            <div>{price}</div>
            <img style={{width: "300px", height: "300px"}} src={photo} alt="product"/>
        </div>
    );
}

export default ProductCard;