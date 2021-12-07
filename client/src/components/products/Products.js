import React, {useContext, useEffect, useState} from "react";
import {Route, Routes, Outlet} from "react-router-dom";

// util imports
import {initProducts} from "../../utils/products/productUtils";
import {initFavorites} from "../../utils/users/userUtils";

// component imports
import Product from "./Product";
import ProductList from "./ProductList";
import FavoritesList from "../favorites/FavoritesList";
import Cart from "../shop/Cart";

// context imports
import {UserContext} from "../../utils/context/UserContext";
import MessageComponent from "../common/Message";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [favorites, setFavorites] = useState([{}]);

    const {user} = useContext(UserContext);

    useEffect(() => {
        initProducts(setProducts, "all");
        if(user.token) {
            initFavorites(user, setFavorites);
        }
    }, [user]);

    return (
        <div>
            <MessageComponent/>
            <Routes>
                <Route path="/"
                       element={<ProductList
                           products={products}
                           setSelectedProduct={setSelectedProduct}
                           favorites={favorites}
                           setFavorites={setFavorites}
                           setProducts={setProducts}
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
                <Route path="cart"
                       element={<Cart
                            setSelectedProduct={setSelectedProduct}
                       />}
                />
            </Routes>
            <Outlet/>
        </div>
    );
}

export default Products;