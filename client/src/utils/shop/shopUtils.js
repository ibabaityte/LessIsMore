import axios from "axios";
import {API_URL} from "../constants/apiConstants";
import {generateCartConfig} from "../request/axiosRequestConfig";

const addToCart = (cartObject, product, size) => {
    cartObject.bill += product.price;
    let cartProduct = {
        product: product._id,
        quantity: 1,
        size: size
    }
    cartObject.products.push(cartProduct);
    localStorage.setItem("cart", JSON.stringify(cartObject));
};

const getCartProducts = (setCartProducts, idArray) => {
    axios.get(`${API_URL}/products/cart`, generateCartConfig(idArray)).then((result) => {
        setCartProducts(result.data.data);
    });
}

export {
    addToCart,
    getCartProducts
}