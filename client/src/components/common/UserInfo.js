import React from "react";
import {UserContext} from "../../utils/context/UserContext";

const UserInfoComponent = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    ({user}) => (
                        user ?
                            <div>
                                <div>Email: {user.email}</div>
                                {/*<div>{user.token}</div>*/}
                                <div>Firstname: {user.firstName}</div>
                                <div>Lastname: {user.lastName}</div>
                            </div> : ""
                    )
                }
            </UserContext.Consumer>
        </div>
    );
};

export default UserInfoComponent;