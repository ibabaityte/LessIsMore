import React from "react";

// context imports
// import {UserContext} from "./utils/context/UserContext";
import {UserContext} from "../../utils/context/UserContext";
// import {Link} from "react-router-dom";
// import {logout} from "../../utils/users/userUtils";

const AdminPanel = () => {
    return (
        <UserContext.Consumer>
            {
                ({user}) => (
                    user.userType === "ADMIN" ?
                        <div>
                            <h1>This is the admin panel</h1>
                        </div>
                        :
                        <div>
                            <h1>You have no permission to access this route</h1>
                        </div>
                )
            }
        </UserContext.Consumer>

    );
}

export default AdminPanel;