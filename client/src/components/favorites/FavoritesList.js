import React, {useContext, useEffect, useState, useRef} from "react";

// component imports
import FavoriteProduct from "./FavoriteProduct";

// util imports
import {initFavorites} from "../../utils/users/userUtils";

// context imports
import {UserContext} from "../../utils/context/UserContext";

const FavoritesList = () => {

    const {user} = useContext(UserContext);

    const [favorites, setFavorites] = useState([]);
    const componentMounted = useRef(true);

    useEffect(() => {
        if (componentMounted.current) {
            initFavorites(user, favorites, setFavorites);
        }
        return () => {
            componentMounted.current = false;
        }
    }, [favorites, user]);

    return (
        <div>
            {
                favorites.map((favorite) => (
                    <FavoriteProduct
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