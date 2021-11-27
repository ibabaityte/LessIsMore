import React, {useEffect, useState} from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";

// component imports
import AdminCreateProduct from "./AdminCreateProduct";
import ProductList from "../../products/ProductList";

// util imports
import {initProducts} from "../../../utils/products/productUtils";

const AdminProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        initProducts(setProducts, "all");
    }, []);

    return (
        <div>
            <Link to="create">Create</Link>
            <Routes>
                <Route path="/"
                       element={<ProductList
                           products={products}
                           setProducts={setProducts}
                       />}
                />
                <Route path="create"
                       element={<AdminCreateProduct
                       />}
                />
            </Routes>
            <Outlet/>
        </div>
    );
};

export default AdminProducts;