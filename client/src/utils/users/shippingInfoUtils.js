import axios from "axios";
import {API_URL} from "../constants/apiConstants";
import {generateRequestConfig} from "../request/axiosRequestConfig";

const updateShippingInfo = (user, shippingInfo, setShippingInfo, setMessage) => {

    axios.put(`${API_URL}/${user.userId}`, shippingInfo, generateRequestConfig())
        .then((result) => {
            console.log(result);
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

            window.location.href = "/userProfile"
        })
        .catch((err) => {
            console.log(err);
            setMessage(err.response.data.message);
        });
}

const init = (user, setNewShippingInfo) => {
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


export {
    updateShippingInfo,
    init
}