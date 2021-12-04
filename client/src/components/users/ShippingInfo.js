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

// style imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {initShippingInfo} from "../../utils/users/shippingInfoUtils";

const ShippingInfo = () => {

    const {user} = useContext(UserContext);
    const {cartContext} = useContext(CartContext);
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
        <div>
            <h1>Enter shipping info:</h1>
            <MessageComponent/>
            <form onSubmit={e => handleShippingInfo(e, user, newShippingInfo, setNewShippingInfo, setMessage)}>
                <div className="inputs">

                    <TextField
                        type="text"
                        value={newShippingInfo.phoneNumber || ""}
                        name="phoneNumber"
                        label="phoneNumber"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={newShippingInfo.city || ""}
                        name="city"
                        label="city"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={newShippingInfo.street || ""}
                        label="street"
                        name="street"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={newShippingInfo.buildingNumber || ""}
                        label="buildingNumber"
                        name="buildingNumber"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={newShippingInfo.postalCode || ""}
                        label="postalCode"
                        name="postalCode"
                        onChange={e => handleChangeShippingInfo(e, newShippingInfo, setNewShippingInfo)}
                    />
                </div>
                {
                    window.location.href === "http://localhost:3000/cart" ?
                        <Button onClick={() => {completeOrder(cartContext, setMessage)}}>Create order</Button>
                        :
                        <Button type="submit">Complete</Button>
                }

            </form>
        </div>
    );
}

export default ShippingInfo;