import React, {useContext} from "react";

// context imports
import {UserContext} from "../../utils/context/UserContext";
import ProductCardButton from "./ProductCardButton";

// style imports
import {withStyles} from "@material-ui/core/styles";
import productListStyles from "../../utils/style/productListStyles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = (props) => {

    const classes = props.classes;

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
        <div className={classes.product}>
            <Card>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt="product"
                />
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.productTitle}>{title}</Typography>
                    <Typography variant="h7">{price} €</Typography>
                </CardContent>
                <CardActions className={classes.cardButtons}>
                    <ProductCardButton
                        favorites={favorites}
                        product={product}
                        user={user}
                        setFavorites={setFavorites}
                        setProducts={setProducts}
                        setSelectedProduct={setSelectedProduct}
                    />
                </CardActions>
            </Card>
        </div>
    );
}

export default  withStyles(productListStyles)(ProductCard);