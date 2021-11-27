import React from "react";

// util imports
import {addFavorite, removeFavorite} from "../../utils/products/favoritesHandlers";
import {removeProduct} from "../../utils/admin/adminProductUtils";

const ProductCardButton = (props) => {

    const {
        favorites,
        product,
        user,
        setFavorites,
        setMessage,
        setProducts
    } = props;

    if(user.userType === "ADMIN") {
        return <button onClick={() => removeProduct(product, setProducts)}>Remove product</button>
    } else if (window.location.href === "http://localhost:3000/favorites") {
        return <button onClick={() => removeFavorite(favorites, product._id, user, setFavorites)}>Remove from favorites</button>
    } else {
        return <button onClick={() => addFavorite(favorites, product, product._id, user, setFavorites, setMessage)}>Add to favorites</button>
    }
};

export default ProductCardButton;