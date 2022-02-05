import React, {useContext, useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";

// context imports
import {UserContext} from "../../utils/context/UserContext";

// component imports
import UserInfoComponent from "../common/UserInfo.js";
import ShippingInfo from "./ShippingInfo.js";
import {initShippingInfo} from "../../utils/users/shippingInfoUtils";
import MessageComponent from "../common/Message";

// style imports
import {withStyles} from "@material-ui/core/styles";
import userProfileStyles from "../../utils/style/userProfileStyles";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const UserProfile = (props) => {

    const classes = props.classes;

    const {user} = useContext(UserContext);

    const [shippingInfo, setShippingInfo] = useState({
        phoneNumber: "",
        city: "",
        street: "",
        buildingNumber: "",
        postalCode: ""
    });

    useEffect(() => {
        initShippingInfo(user, setShippingInfo);
    }, [setShippingInfo, user]);

    return (
        <Grid container className={classes.grid}>
            {
                user.token ?
                    <Grid container>
                        <Grid item xs={12} style={{height: "21vh"}}>
                            <h1 className={classes.heading}>User profile</h1>
                        </Grid>
                        <Grid item xs={12} className={classes.userInfoDiv}>
                            <Grid container>
                                <Grid item md={6} xs={12} className={classes.infoGrid}>
                                    <UserInfoComponent/>
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.infoGrid}>
                                    <h3>Shipping information:</h3>
                                    <div className={classes.info}><span
                                        className={classes.infoName}>Phone number:</span> {shippingInfo.phoneNumber}
                                    </div>
                                    <div className={classes.info}><span
                                        className={classes.infoName}>City:</span> {shippingInfo.city}</div>
                                    <div className={classes.info}><span
                                        className={classes.infoName}>Street:</span> {shippingInfo.street}</div>
                                    <div className={classes.info}><span className={classes.infoName}>Building/apartment number:</span> {shippingInfo.buildingNumber}
                                    </div>
                                    <div className={classes.info}><span
                                        className={classes.infoName}>Postal code:</span> {shippingInfo.postalCode}</div>
                                </Grid>
                                <Grid item xs={12} className={classes.buttonDiv}>
                                    <Link to="shippingInfo" className={classes.link}>
                                        <Button className={classes.button}>Edit shipping information</Button>
                                    </Link>
                                    <MessageComponent/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Routes>
                                    <Route
                                        path="shippingInfo"
                                        element={
                                            <ShippingInfo/>
                                        }
                                    />
                                </Routes>
                            </Grid>
                        </Grid>
                    </Grid>
                    :
                    <Grid container className={classes.loginRegisterPanel}>
                        <Grid item xs={12}>
                            <h4 className={classes.panelMessage}>You are not logged in. Please log in, or if you dont
                                have an account, please sign up!</h4>
                            <div className={classes.buttons}>
                                <Link to="/login" className={classes.panelLink}><Button
                                    className={classes.panelButton}>Login</Button></Link>
                                <Link to="/register" className={classes.panelLink}><Button
                                    className={classes.panelButton}>Register</Button></Link>
                            </div>
                        </Grid>
                    </Grid>
            }
        </Grid>
    );
}

export default withStyles(userProfileStyles)(UserProfile);