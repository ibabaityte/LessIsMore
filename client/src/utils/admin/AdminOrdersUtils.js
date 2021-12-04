import axios from "axios";

// url import
import {API_URL} from "../constants/apiConstants";

// config
import {generateAuthConfig} from "../request/axiosRequestConfig";

const initOrders = (orders, setOrders) => {
    axios.get(`${API_URL}/order/list`, generateAuthConfig()).then(result => {
        setOrders(result.data.data);
        console.log(result.data.data);
    })
};

export {
    initOrders
}