import React, {useContext} from "react";
import {Link} from "react-router-dom";

// context imports
import {UserContext} from "../../utils/context/UserContext";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
import ProductCardButton from "./ProductCardButton";

const ProductCard = (props) => {

    const {
        product,
        title,
        price,
        photo,
        setSelectedProduct,
        favorites,
        setFavorites,
        setProducts
    } = props;

    const {user} = useContext(UserContext);
    const {setMessage} = useContext(ApiMessageContext);

    return (
        <div>
            <Link to="/product" onClick={() => {setSelectedProduct(product)}}>{title}</Link>
            <div>{price}</div>
            <img style={{width: "300px", height: "300px"}} src={photo} alt="product"/>
            <div>{product._id}</div>
            <ProductCardButton
                favorites={favorites}
                product={product}
                user={user}
                setFavorites={setFavorites}
                setMessage={setMessage}
                setProducts={setProducts}
            />
        </div>
    );
}

export default ProductCard;