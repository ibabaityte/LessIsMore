import React from "react";
import {Routes, Route, Link} from "react-router-dom";

// component imports
import LoginRegisterPanel from "./LoginRegisterPanel.js";
import Login from "../users/Login";
import Register from "../users/Register";

const Header = () => {
    return (
        <div>
            <h1>This is the header</h1>
            <Link to="/loginRegisterPanel">User</Link>
            <Routes>
                <Route path="/loginRegisterPanel/*" element={<LoginRegisterPanel/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default Header;