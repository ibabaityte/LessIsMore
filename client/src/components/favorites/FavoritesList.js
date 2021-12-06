import React from "react";

// component imports
import ProductCard from "../products/ProductCard";

// style imports
import {withStyles} from "@material-ui/core/styles";
import favoritesListStyles from "../../utils/style/favoritesListStyles";
import Grid from '@mui/material/Grid';

const FavoritesList = (props) => {

    const classes = props.classes;

    const {
        setSelectedProduct,
        favorites,
        setFavorites
    } = props;

    return (
        <Grid container style={{height: "100vh"}} className={classes.productList}>
            <Grid item xs={12}>
                <h1 className={classes.heading}>Favorite products</h1>
            </Grid>
            {
                favorites.map((favorite, key) => (
                    <Grid key={key} item xl={3} lg={4} md={6} xs={12} className={classes.productList}>
                        <ProductCard
                            product={favorite}
                            title={favorite.title}
                            price={favorite.price}
                            image={favorite.image}
                            setSelectedProduct={setSelectedProduct}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default withStyles(favoritesListStyles)(FavoritesList);