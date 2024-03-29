import {API_URL} from "../constants/apiConstants";
import axios from "axios";

// util imports
import {generateAuthConfig, generateRequestConfig} from "../request/axiosRequestConfig";
import {initProducts} from "../products/productUtils";

const removeProduct = (product, setProducts, setMessage, setCode) => {
    axios.delete(`${API_URL}/products/delete/${product._id}`, generateRequestConfig()).then(() => {
        // console.log(result);
        initProducts(setProducts, "all");
        setMessage("Product deleted successfully.");
        setCode("200");
        localStorage.setItem("apiMessage", "Product deleted successfully.");
        localStorage.setItem("code", "200");
    }).catch(err => {
        console.log(err);
    })
}

const generateFormData = (product) => {
    let formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("image", product.image);
    // console.log(formData);
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    return formData;
}

const createProduct = (e, product, setProducts, setMessage, setCode) => {
    e.preventDefault();
    axios.post(`${API_URL}/products/create`, generateFormData(product), generateAuthConfig()).then((result) =>{
        // console.log(result.data.message);
        initProducts(setProducts, "all");
        setMessage(result.data.message);
        setCode("200");
        localStorage.setItem("apiMessage", result.data.message);
        localStorage.setItem("code", "200");
    }).catch((err) => {
        setMessage(err.response.data.message);
        setCode("400");
        localStorage.setItem("apiMessage", err.response.data.message);
        localStorage.setItem("code", "400");
        // console.log(err.response.data.message);
    });
};

const updateProduct = (e, user, selectedProduct, setMessage, setCode) => {
    e.preventDefault();
    axios.put(`${API_URL}/products/update/${selectedProduct._id}`, generateFormData(selectedProduct), {
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        // console.log(result.data.message);
        setMessage(result.data.message);
        setCode("200");
        localStorage.setItem("apiMessage", result.data.message);
        localStorage.setItem("code", "200");
        window.location.href = "/adminPanel/products";
    }).catch(err => {
        console.log(err.response);
        setMessage(err.response.data.message);
        setCode("400");
        localStorage.setItem("apiMessage", err.response.data.message);
        localStorage.setItem("code", "400");
    });
};

export {
    removeProduct,
    createProduct,
    updateProduct
};
