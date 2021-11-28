import React, {useContext} from "react";
import {Link} from "react-router-dom";

// util imports
import {logout} from "../utils/users/userUtils";

// context imports
import {UserContext} from "../utils/context/UserContext";

const Header = () => {
    const {user} = useContext(UserContext);

    if (user.userType === "ADMIN") {
        return (
            <div>
                <h1><Link to="/adminPanel">Less is more</Link></h1>
            </div>
        )
    } else if (!!user.token) {
        return (
            <div>
                <h4>Hello, {user.firstName}</h4>
                <Link to="userProfile">User</Link>
                <Link to="favorites">Favorites</Link>
                <Link to="cart">Cart</Link>
                <button onClick={() => logout()}>Logout</button>
            </div>
        );
    } else {
        return <Link to="userProfile">User</Link>
    }
}

export default Header;