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
        <Grid container className={classes.productList}>
            <Grid>
                <Grid item xs={12} style={{height: "21vh"}}>
                    <h1 className={classes.heading}>Favorite products</h1>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    {
                        favorites.length === 0 ?
                            <h1 className={classes.heading}>Favorites list is empty</h1> :
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
            </Grid>
        </Grid>
    );
}

export default withStyles(favoritesListStyles)(FavoritesList);