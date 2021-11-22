import React, {useContext, useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";

// context imports
import {UserContext} from "../../utils/context/UserContext";

// component imports
import UserInfoComponent from "../common/UserInfo.js";
import ShippingInfo from "./ShippingInfo.js";
import {init} from "../../utils/users/shippingInfoUtils";

const UserProfile = (props) => {
    const {isAuth} = props;
    const {user} = useContext(UserContext);

    const [shippingInfo, setShippingInfo] = useState({
        phoneNumber: "",
        city: "",
        street: "",
        buildingNumber: "",
        postalCode: ""
    });

    useEffect(() => {
        init(user, setShippingInfo);
    }, [setShippingInfo, user]);

    return (
        <div>
            {
                isAuth ?
                    <div>
                        <h1>This is the user profile panel</h1>
                        <h3>User information:</h3>
                        <UserInfoComponent/>
                        <div>Phone number: {shippingInfo.phoneNumber}</div>
                        <div>City: {shippingInfo.city}</div>
                        <div>Street: {shippingInfo.street}</div>
                        <div>Building number: {shippingInfo.buildingNumber}</div>
                        <div>Postal code: {shippingInfo.postalCode}</div>
                        <Link to="shippingInfo">Enter shipping info</Link>
                    </div>
                    :
                    <div>
                        <div>You are not logged in. Please log in, or if you dont have an account, please sign up!</div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
            }
            <Routes>
                <Route
                    path="shippingInfo/*"
                    element={
                        <ShippingInfo
                            shippingInfo={shippingInfo}
                            setShippingInfo={setShippingInfo}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default UserProfile;