import React, {useContext} from "react";
import {Link} from "react-router-dom";

// context imports
import {UserContext} from "../../utils/context/UserContext";
import ProductCardButton from "./ProductCardButton";

const ProductCard = (props) => {

    const {
        product,
        title,
        price,
        image,
        setSelectedProduct,
        favorites,
        setFavorites,
        setProducts,
    } = props;

    const {user} = useContext(UserContext);

    return (
        <div>
            <Link to="/product" onClick={() => {setSelectedProduct(product)}}>{title}</Link>
            <div>{price}</div>
            <img style={{width: "300px", height: "300px"}} src={image} alt="product"/>
            <ProductCardButton
                favorites={favorites}
                product={product}
                user={user}
                setFavorites={setFavorites}
                setProducts={setProducts}
                setSelectedProduct={setSelectedProduct}
            />
        </div>
    );
}

export default ProductCard;