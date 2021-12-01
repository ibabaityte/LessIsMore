import React from "react";
import {Link} from "react-router-dom";

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
        setProducts,
        setSelectedProduct
    } = props;

    if(user.userType === "ADMIN") {
        return (
            <div>
                <button onClick={() => removeProduct(product, setProducts)}>Remove product</button>
                <Link to="update" onClick={() => setSelectedProduct(product)}>Update product</Link>
            </div>
        );
    } else if (window.location.href === "http://localhost:3000/favorites") {
        return <button onClick={() => removeFavorite(favorites, product._id, user, setFavorites)}>Remove from favorites</button>
    } else {
        return <button onClick={() => addFavorite(favorites, product, product._id, user, setFavorites, setMessage)}>Add to favorites</button>
    }
};

export default ProductCardButton;