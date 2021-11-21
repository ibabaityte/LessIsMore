import React from "react";
import {UserContext} from "../../utils/context/UserContext";

const UserInfoComponent = () => {
    return(
        <div>
            <UserContext.Consumer>
                {
                    ({user}) => (
                        user ? <div>
                            <div>{user.email}</div>
                            <div>{user.token}</div>
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                        </div> : ""
                    )
                }
            </UserContext.Consumer>
        </div>
    );
};

export default UserInfoComponent;