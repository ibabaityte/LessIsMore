import React, {useContext, useEffect, useState} from "react";

// util imports
import {handleChangeShippingInfo, handleShippingInfo} from "../../utils/users/shippingInfoHandlers";
import {completeOrder} from "../../utils/shop/shopUtils";

// context imports
import {UserContext} from "../../utils/context/UserContext";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
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

    const {
        cart,
        bill
    } = props;

    const {user} = useContext(UserContext);
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
                <h3>Edit shipping information:</h3>
            </Grid>
            <Grid item xs={12} className={classes.shippingForm}>
                <form className={classes.form}
                      onSubmit={e => handleShippingInfo(e, user, newShippingInfo, setNewShippingInfo, setMessage, setCode)}>

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
                                onClick={() => {
                                    completeOrder(cart, bill, newShippingInfo, setNewShippingInfo, user, setMessage, setCode)
                                }}
                            >Complete order</Button>
                            :
                            <Button
                                className={classes.button}
                                type="submit">Confirm
                            </Button>
                    }
                </form>
            </Grid>
        </Grid>
    );
}

export default withStyles(shippingInfoStyles)(ShippingInfo);