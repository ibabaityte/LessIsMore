import React, {useContext, useEffect, useState} from "react";

// component imports
import ProductCard from "../shop/ProductCard";

// util imports
import {initFavorites} from "../../utils/users/userUtils";

// context imports
import {UserContext} from "../../utils/context/UserContext";

const FavoritesList = () => {

    const {user} = useContext(UserContext);

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        initFavorites(user, setFavorites);
    }, [user, setFavorites]);

    return (
        <div>
            {
                favorites.map((favorite) => (
                    <ProductCard
                        key={favorite._id}
                        title={favorite.title}
                        price={favorite.price}
                        photo={favorite.photo}
                    />
                ))
            }
        </div>
    );
}

export default FavoritesList;