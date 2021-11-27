import {API_URL} from "../constants/apiConstants";
import axios from "axios";

// util imports
import {generateRequestConfig} from "../request/axiosRequestConfig";
import {initProducts} from "../products/productUtils";

const removeProduct = (product, setProducts) => {
    axios.delete(`${API_URL}/products/delete/${product._id}`, generateRequestConfig()).then(result => {
        // console.log(result);
        initProducts(setProducts, "all");
    }).catch(err => {
        console.log(err);
    })
}

export {
    removeProduct
};