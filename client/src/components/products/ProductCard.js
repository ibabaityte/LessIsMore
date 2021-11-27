import React, {useContext} from "react";
import {Link} from "react-router-dom";

// util imports
import {removeFavorite, addFavorite} from "../../utils/products/favoritesHandlers";

// context imports
import {UserContext} from "../../utils/context/UserContext";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";

const ProductCard = (props) => {

    const {
        product,
        title,
        price,
        photo,
        setSelectedProduct,
        favorites,
        setFavorites
    } = props;

    const {user} = useContext(UserContext);
    const {setMessage} = useContext(ApiMessageContext);

    return (
        <div>
            <Link to="/product" onClick={() => {setSelectedProduct(product)}}>{title}</Link>
            <div>{price}</div>
            <img style={{width: "300px", height: "300px"}} src={photo} alt="product"/>
            {
                window.location.href === "http://localhost:3000/favorites" ?
                    <button onClick={() => removeFavorite(favorites, product._id, user, setFavorites)}>Remove from favorites</button>
                    :
                    <button onClick={() => addFavorite(favorites, product, product._id, user, setFavorites, setMessage)}>Add to favorites</button>
            }
        </div>
    );
}

export default ProductCard;