import React from "react";

// component imports
import ProductCardButton from "./ProductCardButton";

// style imports
import {withStyles} from "@material-ui/core/styles";
import productStyles from "../../utils/style/productStyles";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

const Product = (props) => {

    const classes = props.classes;

    const {
        selectedProduct,
        favorites,
        setFavorites,
        user,
        setProducts,
        setSelectedProduct
    } = props;

    return (
        <Grid container className={classes.product}>
            <Grid item xs={12} md={6}>
                <Card className={classes.imageCard}>
                    <CardMedia
                        component="img"
                        height="600px"
                        image={selectedProduct.image}
                        alt="product"
                    />
                </Card>
            </Grid>
            <Grid item xs={12} md={6} className={classes.productInfo}>
                <h1>{selectedProduct.title}</h1>
                <h4>{selectedProduct.description}</h4>
                <div><span className={classes.price}>Price: </span>{selectedProduct.price} €</div>
                <div className={classes.productButtons}>
                    <ProductCardButton
                        favorites={favorites}
                        product={selectedProduct}
                        user={user}
                        setFavorites={setFavorites}
                        setProducts={setProducts}
                        setSelectedProduct={setSelectedProduct}
                    />
                </div>
            </Grid>
        </Grid>
    );
}

export default withStyles(productStyles)(Product);
