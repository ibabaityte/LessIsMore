import React, {useContext, useEffect, useState} from "react";
import {Route, Routes, Outlet} from "react-router-dom";

// util imports
import {initProducts} from "../../utils/shop/shopUtils";

// component imports
import Product from "./Product";
import ProductList from "./ProductList";
import FavoritesList from "../favorites/FavoritesList";
import {initFavorites} from "../../utils/users/userUtils";

// context imports
import {UserContext} from "../../utils/context/UserContext";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [favorites, setFavorites] = useState([{}]);

    const {user} = useContext(UserContext);

    useEffect(() => {
        initProducts(setProducts);
        if(user.token) {
            initFavorites(user, setFavorites);
        }
    }, [user]);

    return (
        <div>
            <Routes>
                <Route path="/"
                       element={<ProductList
                           products={products}
                           setSelectedProduct={setSelectedProduct}
                           favorites={favorites}
                           setFavorites={setFavorites}
                       />}
                />
                <Route path="favorites"
                       element={<FavoritesList
                           setSelectedProduct={setSelectedProduct}
                           favorites={favorites}
                           setFavorites={setFavorites}
                       />}
                />
                <Route path="product"
                       element={<Product
                           product={selectedProduct}
                       />}
                />
            </Routes>
            <Outlet/>
        </div>
    );
}

export default Products;