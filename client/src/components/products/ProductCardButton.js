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
import {withStyles} from "@material-ui/core/styles";
import productListStyles from "../../utils/style/productListStyles";
import Box from '@mui/material/Box';
import {ApiCodeContext} from "../../utils/context/ApiCodeContext";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCardButton = (props) => {

    const classes = props.classes;

    const [showBox, setShowBox] = useState("none");
    const showSizeBox = () => {
        if(showBox === "none") {
            setShowBox("block");
        } else {
            setShowBox("none");
        }
    }

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

    if (user.userType === "ADMIN") {
        return (
            <div>
                <button onClick={() => removeProduct(product, setProducts)}>Remove product</button>
                <Link to="update" onClick={() => setSelectedProduct(product)}>Update product</Link>
            </div>
        );
    } else if (window.location.href === "http://localhost:3000/favorites") {
        return <button onClick={() => removeFavorite(favorites, product._id, user, setFavorites)}>Remove from favorites</button>
    } else {
        return <div className={classes.buttonGroup}>
            <Box display={showBox}>
                <ToggleButtonGroup
                    className={classes.sizeButtons}
                    exclusive
                    onClick={(e) => {
                        handleAddToCart(cartContext, setCartContext, product, e.target.value, setMessage, setCode)
                    }}
                >
                    <ToggleButton  className={classes.size} value="XXS">XXS</ToggleButton>
                    <ToggleButton  className={classes.size} value="XS">XS</ToggleButton>
                    <ToggleButton  className={classes.size} value="S">S</ToggleButton>
                    <ToggleButton  className={classes.size} value="M">M</ToggleButton>
                    <ToggleButton  className={classes.size} value="L">L</ToggleButton>
                    <ToggleButton  className={classes.size} value="XL">XL</ToggleButton>
                    <ToggleButton  className={classes.size} value="XXL">XXL</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <IconButton onClick={() => addFavorite(favorites, product, product._id, user, setFavorites, setMessage, setCode)}>
                <FavoriteIcon sx={{ color: 'rgb(181, 5, 26)' }} className={classes.icon} fontSize="large"/>
            </IconButton>
            <IconButton onClick={() => {showSizeBox()}}>
                <ShoppingCartIcon sx={{ color: 'rgb(20, 87, 66)' }} className={classes.icon} fontSize="large"/>
            </IconButton>
        </div>
    }
};

export default withStyles(productListStyles)(ProductCardButton);