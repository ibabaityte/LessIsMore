import React, {useEffect, useState} from "react";
import {Outlet, Route, Routes} from "react-router-dom";

// component imports
import AdminCreateProduct from "./AdminCreateProduct";
import ProductList from "../../products/ProductList";
import AdminUpdateProduct from "./AdminUpdateProduct";

// util imports
import {initProducts} from "../../../utils/products/productUtils";
import Product from "../../products/Product";

const AdminProducts = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        initProducts(setProducts, "all");
    }, [setProducts]);

    return (
        <div>
            <Routes>
                <Route path="/"
                       element={<ProductList
                           products={products}
                           setSelectedProduct={setSelectedProduct}
                           favorites={null}
                           setFavorites={null}
                           setProducts={setProducts}
                       />}
                />
                <Route path="product"
                       element={<Product
                           selectedProduct={selectedProduct}
                           favorites={null}
                           setFavorites={null}
                           user={null}
                           setProducts={setProducts}
                           setSelectedProduct={setSelectedProduct}
                       />}
                />
                <Route path="create"
                       element={<AdminCreateProduct
                           setProducts={setProducts}
                       />}
                />
                <Route path="update"
                       element={<AdminUpdateProduct
                           selectedProduct={selectedProduct}
                           setSelectedProduct={setSelectedProduct}
                       />}
                />
            </Routes>
            <Outlet/>
        </div>
    );
};

export default AdminProducts;