import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";

// util imports
import {addFavorite, removeFavorite} from "../../utils/products/favoritesHandlers";
import {removeProduct} from "../../utils/admin/adminProductUtils";
import {handleAddToCart} from "../../utils/shop/shopHandlers";

// context imports
import {CartContext} from "../../utils/context/CartContext";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";

// style imports
import Box from '@mui/material/Box';
import {ApiCodeContext} from "../../utils/context/ApiCodeContext";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ProductCardButton = (props) => {

    const [showBox, setShowBox] = useState("none");

    const {cartContext, setCartContext} = useContext(CartContext);
    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const {
        favorites,
        product,
        user,
        setFavorites,
        setProducts,
        setSelectedProduct,
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
        return <div>
            <Box display={showBox}>
                <ToggleButtonGroup
                    exclusive
                    onClick={(e) => {handleAddToCart(cartContext, setCartContext, product, e.target.value, setMessage, setCode)}}
                    aria-label="text alignment"
                >
                    <ToggleButton value="XXS" aria-label="left aligned">XXS</ToggleButton>
                    <ToggleButton value="XS" aria-label="left aligned">XS</ToggleButton>
                    <ToggleButton value="S" aria-label="centered">S</ToggleButton>
                    <ToggleButton value="M" aria-label="right aligned">M</ToggleButton>
                    <ToggleButton value="L" aria-label="justified">L</ToggleButton>
                    <ToggleButton value="XL" aria-label="justified">XL</ToggleButton>
                    <ToggleButton value="XXL" aria-label="justified">XXL</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <button onClick={() => addFavorite(favorites, product, product._id, user, setFavorites, setMessage, setCode)}>Add to favorites</button>
            <button onClick={() => {setShowBox("block")}}>Add to cart</button>
        </div>
    }
};

export default ProductCardButton;