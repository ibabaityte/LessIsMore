import React, {useContext} from "react";
import {Routes, Route, Link} from "react-router-dom";

// component imports
import UserProfile from "./users/UserProfile.js";
import Login from "./users/Login";
import Register from "./users/Register";
import FavoritesList from "./favorites/FavoritesList";

// util imports
import {logout} from "../utils/users/userUtils";

// context imports
import {UserContext} from "../utils/context/UserContext";

const Header = () => {
    const {user} = useContext(UserContext);

    return (
        <div>
            <h1><Link to="/">Less is more</Link></h1>
            {
                !!user.token ?
                    <div>
                        <h4>Hello, {user.firstName}</h4>
                        <Link to="userProfile">User</Link>
                        <Link to="favorites">Favorites</Link>
                        <Link to="cart">Cart</Link>
                        <button onClick={() => logout()}>Logout</button>
                    </div>
                    :
                    <Link to="userProfile">User</Link>
            }
            <Routes>
                <Route path="userProfile/*" element={<UserProfile/>}/>
                <Route path="favorites" element={<FavoritesList/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default Header;