import React, {useContext, useEffect, useState} from "react";

// component imports
import ProductCard from "../products/ProductCard";

// util imports
import {initFavorites} from "../../utils/users/userUtils";

// context imports
import {UserContext} from "../../utils/context/UserContext";

const FavoritesList = (props) => {

    const {setSelectedProduct} = props;
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
                        product={favorite}
                        title={favorite.title}
                        price={favorite.price}
                        photo={favorite.photo}
                        setSelectedProduct={setSelectedProduct}
                    />
                ))
            }
        </div>
    );
}

export default FavoritesList;