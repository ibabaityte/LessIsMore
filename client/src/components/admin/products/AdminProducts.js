import React from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";

// component imports
import AdminCreateProduct from "./AdminCreateProduct";
import AdminProductList from "./AdminProductList";

const AdminProducts = () => {
    return (
        <div>
            <Link to="create">Create</Link>
            <Routes>
                <Route path="/"
                       element={<AdminProductList
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