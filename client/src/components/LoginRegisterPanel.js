import React from "react";
import {Link} from "react-router-dom";

// component imports


const LoginRegisterPanel = () => {
    return (
        <div>
            <h1>This is the login and register panel</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default LoginRegisterPanel;