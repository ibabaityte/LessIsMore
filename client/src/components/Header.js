import React, {useContext} from "react";
import {Link} from "react-router-dom";

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
        </div>
    );
}

export default Header;