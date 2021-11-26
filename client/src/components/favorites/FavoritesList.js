import React from "react";

// component imports
import ProductCard from "../products/ProductCard";

// context imports
import MessageComponent from "../common/Message";

const FavoritesList = (props) => {

    const {
        setSelectedProduct,
        favorites,
        setFavorites
    } = props;

    return (
        <div>
            <MessageComponent/>
            {
                favorites.map((favorite, key) => (
                    <ProductCard
                        key={key}
                        product={favorite}
                        title={favorite.title}
                        price={favorite.price}
                        photo={favorite.photo}
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