import React, {useEffect, useState} from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";

// component imports
import AdminCreateProduct from "./AdminCreateProduct";
import ProductList from "../../products/ProductList";
import AdminUpdateProduct from "./AdminUpdateProduct";
import MessageComponent from "../../common/Message";

// util imports
import {initProducts} from "../../../utils/products/productUtils";

const AdminProducts = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        initProducts(setProducts, "all");
    }, [setProducts]);

    return (
        <div>
            <MessageComponent/>
            <Link to="create">Create</Link>
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