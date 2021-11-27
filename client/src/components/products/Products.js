import React, {useContext, useEffect, useState} from "react";
import {Route, Routes, Outlet} from "react-router-dom";

// util imports
import {initProducts} from "../../utils/products/productUtils";
import {initFavorites} from "../../utils/users/userUtils";

// component imports
import Product from "./Product";
import ProductList from "./ProductList";
import FavoritesList from "../favorites/FavoritesList";

// context imports
import {UserContext} from "../../utils/context/UserContext";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [favorites, setFavorites] = useState([{}]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("");

    const {user} = useContext(UserContext);

    useEffect(() => {
        initProducts(setProducts, "all");
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
                           setProducts={setProducts}
                           setSelectedProduct={setSelectedProduct}
                           favorites={favorites}
                           setFavorites={setFavorites}
                           searchQuery={searchQuery}
                           setSearchQuery={setSearchQuery}
                           filter={filter}
                           setFilter={setFilter}
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