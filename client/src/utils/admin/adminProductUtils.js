import {API_URL} from "../constants/apiConstants";
import axios from "axios";

// util imports
import {generateCreateProductConfig, generateRequestConfig} from "../request/axiosRequestConfig";
import {initProducts} from "../products/productUtils";

const removeProduct = (product, setProducts) => {
    axios.delete(`${API_URL}/products/delete/${product._id}`, generateRequestConfig()).then(result => {
        // console.log(result);
        initProducts(setProducts, "all");
    }).catch(err => {
        console.log(err);
    })
}

const createProduct = (e, product, setProducts, setMessage) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", product.title);
    formData.append("desc", product.desc);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("image", product.image);

    axios.post(`${API_URL}/products/create`, formData, generateCreateProductConfig()).then((result) =>{
        console.log(result.data.message);
        initProducts(setProducts, "all");
        setMessage(result.data.message);
    }).catch((err) => {
        setMessage(err.response.data.message);
        console.log(err.response.data.message);
    });
};

export {
    removeProduct,
    createProduct
};