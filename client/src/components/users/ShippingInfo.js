import React, {useContext, useEffect, useState} from "react";

// util imports
import {handleChangeShippingInfo, handleShippingInfo} from "../../utils/users/shippingInfoHandlers";
import {completeOrder} from "../../utils/shop/shopUtils";

// component imports
import MessageComponent from "../common/Message";

// context imports
import {UserContext} from "../../utils/context/UserContext";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
import {CartContext} from "../../utils/context/CartContext";
import {ApiCodeContext} from "../../utils/context/ApiCodeContext";

// style imports
import {withStyles} from "@material-ui/core/styles";
import shippingInfoStyles from "../../utils/style/shippingInfoStyles";
import Grid from '@mui/material/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {initShippingInfo} from "../../utils/users/shippingInfoUtils";

const ShippingInfo = (props) => {

    const classes = props.classes;

    const {user} = useContext(UserContext);
    const {cartContext} = useContext(CartContext);
    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const [newShippingInfo, setNewShippingInfo] = useState({
        phoneNumber: "",
        city: "",
        street: "",
        buildingNumber: "",
        postalCode: ""
    });

    useEffect(() => {
        initShippingInfo(user, setNewShippingInfo);
    }, [setNewShippingInfo, user]);

    return (
        <Grid container className={classes.shipping}>
            <Grid item xs={12}>
                {
                    window.location.href === "http://localhost:3000/cart" || newShippingInfo.city === "" ?
                        <h3>Enter shipping information:</h3>
                        :
                        <h3>Update shipping information:</h3>
                }
            </Grid>
            <Grid item xs={12} className={classes.shippingForm}>
                <form className={classes.form}
                      onSubmit={e => handleShippingInfo(e, user, newShippingInfo, setNewShippingInfo, setMessage, setCode)}>
                    <div className={classes.formMessage}>
                        <MessageComponent />
                    </div>

                    <TextField
                        className={classes.shippingInput}
                        type="text"
                        value={newShippingInfo.phoneNumber || ""}
                        name="phoneNumber"
                        label="phoneNumber"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />

                    <br/>

                    <TextField
                        className={classes.shippingInput}
                        type="text"
                        value={newShippingInfo.city || ""}
                        name="city"
                        label="city"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />

                    <br/>

                    <TextField
                        className={classes.shippingInput}
                        type="text"
                        value={newShippingInfo.street || ""}
                        label="street"
                        name="street"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />

                    <br/>

                    <TextField
                        className={classes.shippingInput}
                        type="text"
                        value={newShippingInfo.buildingNumber || ""}
                        label="building / apartment number"
                        name="buildingNumber"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />

                    <br/>

                    <TextField
                        className={classes.shippingInput}
                        type="text"
                        value={newShippingInfo.postalCode || ""}
                        label="postalCode"
                        name="postalCode"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />
                    {
                        window.location.href === "http://localhost:3000/cart" ?
                            <Button
                                className={classes.button}
                                onClick={() => {completeOrder(cartContext, newShippingInfo, setNewShippingInfo, user, setMessage, setCode)}}
                            >Complete order</Button>
                            :
                            <Button
                                className={classes.button}
                                type="submit">Submit
                            </Button>
                    }
                </form>
            </Grid>
        </Grid>
    );
}

export default withStyles(shippingInfoStyles)(ShippingInfo);