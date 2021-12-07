import React, {useState} from "react";

// component imports
import ProductCard from "./ProductCard";

// style imports
import {withStyles} from "@material-ui/core/styles";
import productListStyles from "../../utils/style/productListStyles";
import Grid from '@mui/material/Grid';
import Search from "./Search";
import Filter from "./Filter";

const ProductList = (props) => {

    const classes = props.classes;

    const [searchQuery, setSearchQuery] = useState("");

    const {
        products,
        setSelectedProduct,
        favorites,
        setFavorites,
        setProducts,
    } = props;

    return (
        <Grid container className={classes.productList}>
            <Grid item xs={12} className={classes.searchDiv}>
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setProducts={setProducts}
                />
                <Filter
                    setProducts={setProducts}
                />
            </Grid>

            {
                products.map((product) => (
                    <Grid key={product._id} item xl={3} lg={4} md={6} xs={12} className={classes.productList}>
                        <ProductCard
                            product={product}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            setSelectedProduct={setSelectedProduct}
                            favorites={favorites}
                            setFavorites={setFavorites}
                            setProducts={setProducts}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default withStyles(productListStyles)(ProductList);