import axios from "axios";
import {API_URL} from "../constants/apiConstants";
import {generateRequestConfig} from "../request/axiosRequestConfig";

const updateShippingInfo = (user, shippingInfo, setShippingInfo, setMessage, setCode) => {
    axios.put(`${API_URL}/${user.userId}`, shippingInfo, {'headers': {'Authorization': localStorage.getItem('userToken'),}})
        .then((result) => {
            // console.log(result);
            // Stuff for setting context
            // User context
            const shippingInfo = {
                phoneNumber: result.data.phoneNumber,
                city: result.data.city,
                street: result.data.street,
                buildingNumber: result.data.buildingNumber,
                postalCode: result.data.postalCode
            };
            setShippingInfo(shippingInfo);

            // if(window.location.href === "http://localhost:3000/cart") {
            //     window.location.href = "/cart"
            // } else {
            //     window.location.href = "/userProfile"
            // }
            return result;
        })
        .catch((err) => {
            // console.log(err);
            setMessage(err.response.data.message);
            setCode("400");
            localStorage.setItem("apiMessage", err.response.data.message);
            localStorage.setItem("code", "400");
            return err;
        });
}

const initShippingInfo = (user, setNewShippingInfo) => {
    if(user.token) {
        axios.get(`${API_URL}/${user.userId}`, generateRequestConfig()).then((response) => {
            const shippingInfo = {
                phoneNumber: response.data.phoneNumber,
                city: response.data.city,
                street: response.data.street,
                buildingNumber: response.data.buildingNumber,
                postalCode: response.data.postalCode
            };
            setNewShippingInfo(shippingInfo);
        });
    }
}


export {
    updateShippingInfo,
    initShippingInfo
}