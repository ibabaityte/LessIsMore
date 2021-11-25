import axios from "axios";
import {API_URL} from "../constants/apiConstants";

const initProducts = (setProducts) => {
    axios.get(`${API_URL}/products/list`).then((response) => {
        setProducts(response.data.data);
    });
}

export {
    initProducts,
}