import React from "react";
import {Routes, Route, Link} from "react-router-dom";

// component imports
import UserProfile from "./users/UserProfile.js";
import Login from "./users/Login";
import Register from "./users/Register";

// util imports
import {logout} from "../utils/users/userUtils";

// context imports
import {UserContext} from "../utils/context/UserContext";

const Header = (props) => {
    const {isAuth} = props;

    return (
        <div>
            <h1>Less is more</h1>
            {
                isAuth ? <div>
                    <UserContext.Consumer>
                        {
                            ({user}) => (
                                user ?
                                    <div>
                                        <h4>Hello, {user.firstName}</h4>
                                        <Link to="/userProfile">User</Link>
                                        <button onClick={() => logout()}>Logout</button>
                                    </div>
                                    : null
                            )
                        }
                    </UserContext.Consumer>
                </div> : <Link to="/userProfile">User</Link>
            }

            <Routes>
                <Route path="/userProfile/*" element={<UserProfile isAuth={isAuth}/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default Header;