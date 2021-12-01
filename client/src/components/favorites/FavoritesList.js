import React from "react";

// component imports
import ProductCard from "../products/ProductCard";

const FavoritesList = (props) => {

    const {
        setSelectedProduct,
        favorites,
        setFavorites
    } = props;

    return (
        <div>
            {
                favorites.map((favorite, key) => (
                    <ProductCard
                        key={key}
                        product={favorite}
                        title={favorite.title}
                        price={favorite.price}
                        image={favorite.image}
                        setSelectedProduct={setSelectedProduct}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                ))
            }
        </div>
    );
}

export default FavoritesList;