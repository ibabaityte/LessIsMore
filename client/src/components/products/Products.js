import React, {useEffect, useState} from "react";
import {Route, Routes, Outlet} from "react-router-dom";

// util imports
import {initProducts} from "../../utils/shop/shopUtils";

// component imports
import Product from "./Product";
import ProductList from "./ProductList";
import FavoritesList from "../favorites/FavoritesList";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    useEffect(() => {
        initProducts(setProducts);
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/"
                       element={<ProductList
                           products={products}
                           setSelectedProduct={setSelectedProduct}/>
                       }
                />
                <Route path="favorites" element={<FavoritesList setSelectedProduct={setSelectedProduct}/>}/>
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