import React from "react";
import {Routes, Route} from "react-router-dom";

// component imports
import Header from "./Header";
import ProductList from "./shop/ProductList.js";
import AdminPanel from "./admin/AdminPanel.js";

const Layout = () => {
    return (
        <div>
            <h1>Layout page</h1>
            <Header/>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="/adminPanel" element={<AdminPanel/>}/>
            </Routes>
        </div>
    );
}

export default Layout;