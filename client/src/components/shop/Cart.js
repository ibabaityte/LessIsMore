import React, {useEffect, useContext, useState} from "react";

// context imports
import {CartContext} from "../../utils/context/CartContext";

// component imports
import ShippingInfo from "../users/ShippingInfo";
import CartProduct from "./CartProduct";

// util imports
import {getCartProducts} from "../../utils/shop/shopUtils";

// style imports
import {withStyles} from "@material-ui/core/styles";
import cartStyles from "../../utils/style/cartStyles";
import Grid from '@mui/material/Grid';

const Cart = (props) => {

    const classes = props.classes;

    const {setSelectedProduct} = props;

    const {cartContext} = useContext(CartContext);

    const [cartProducts, setCartProducts] = useState([]);

    // generate an array from cart context only consisting product id's
    const idArray = [];
    cartContext.products.forEach(element => {
        idArray.push(element.product);
    });

    // using the generated product ids array to make a request to get an array of full information about each product
    useEffect(() => {
        getCartProducts(setCartProducts, idArray);
    }, []);

    return (
        <Grid container className={classes.cart}>
            <Grid item xs={12} style={{height: "21vh"}}>
                <h1 className={classes.heading}>Cart</h1>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container>
                    {
                        cartProducts.map((productContent, index) => {
                            const cartProduct = cartContext.products[index];
                            return (
                                <Grid item xs={12} md={6}>
                                    <CartProduct
                                        key={index}
                                        productContent={productContent}
                                        cartProduct={cartProduct}
                                        setSelectedProduct={setSelectedProduct}
                                    />
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <ShippingInfo/>
            </Grid>
        </Grid>
    );
};

export default withStyles(cartStyles)(Cart);