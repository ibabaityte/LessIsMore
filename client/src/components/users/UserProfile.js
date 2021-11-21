import React from "react";
import {Link} from "react-router-dom";
import UserInfoComponent from "../common/UserInfo";

const UserProfile = (props) => {
    const {isAuth} = props;

    return (
        <div>
            {
                isAuth ?
                    <div>
                        <h1>This is the user profile panel</h1>
                        <h3>User information:</h3>
                        <UserInfoComponent/>
                    </div>
                    :
                    <div><div>You are not logged in. Please log in, or if you dont have an account, please sign up!</div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
            }
        </div>
    );
}

export default UserProfile;