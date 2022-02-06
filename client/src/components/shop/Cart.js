import React, {useEffect, useContext, useState} from "react";

// util imports
import {getCartProducts} from "../../utils/shop/shopUtils";

// component imports
import ShippingInfo from "../users/ShippingInfo";
import CartProduct from "./CartProduct";

// style imports
import {withStyles} from "@material-ui/core/styles";
import cartStyles from "../../utils/style/cartStyles";
import Grid from '@mui/material/Grid';

const Cart = (props) => {

    const classes = props.classes;

    const {setSelectedProduct} = props;

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        getCartProducts(setCartProducts);
    }, []);

    return (
        <Grid container className={classes.cart}>
            <Grid item xs={12} style={{height: "21vh"}}>
                <h1 className={classes.heading}>Cart</h1>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container>
                    {
                        cartProducts.map((product, index) => {
                            return (
                                <Grid item xs={12} md={6} key={index}>
                                    <CartProduct
                                        product={product}
                                        setSelectedProduct={setSelectedProduct}
                                    />
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Grid>
            {/*<Grid item xs={12} md={6}>*/}
            {/*    <h3 className={classes.bill}>Total: {cartContext.bill} Є</h3>*/}
            {/*    <ShippingInfo/>*/}
            {/*</Grid>*/}
        </Grid>
    );
};

export default withStyles(cartStyles)(Cart);