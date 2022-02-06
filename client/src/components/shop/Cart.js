import React, {useEffect, useState} from "react";

// util imports
import {getCart} from "../../utils/shop/shopUtils";

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

    const [cart, setCart] = useState([]);
    const [bill, setBill] = useState(null);

    useEffect(()  => {
        getCart(setCart, setBill);
    }, []);

    return (
        <Grid container className={classes.cart}>
            <Grid item xs={12} style={{height: "21vh"}}>
                <h1 className={classes.heading}>Cart</h1>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container>
                    {
                        cart.map((product, index) => {
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
            <Grid item xs={12} md={6}>
                <h3 className={classes.bill}>Total: {bill} Є</h3>
                {/*<ShippingInfo/>*/}
            </Grid>
        </Grid>
    );
};

export default withStyles(cartStyles)(Cart);