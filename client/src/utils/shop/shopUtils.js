import axios from "axios";
import {API_URL} from "../constants/apiConstants";
import {generateRequestConfig} from "../request/axiosRequestConfig";

const initProducts = (setProducts) => {
    axios.get(`${API_URL}/products/list`, generateRequestConfig()).then((response) => {
        setProducts(response.data.data);
    });
}

export {
    initProducts
}