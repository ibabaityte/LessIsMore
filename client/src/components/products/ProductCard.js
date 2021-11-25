import React from "react";
import {Link} from "react-router-dom";

const ProductCard = (props) => {

    const {
        product,
        title,
        price,
        photo,
        setSelectedProduct
    } = props;

    return (
        <div>
            <Link to="/product" onClick={() => {setSelectedProduct(product)}}>{title}</Link>
            <div>{price}</div>
            <img style={{width: "300px", height: "300px"}} src={photo} alt="product"/>
            <button>Add to favorites</button>
        </div>
    );
}

export default ProductCard;