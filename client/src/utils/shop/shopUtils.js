import axios from "axios";
import {API_URL} from "../constants/apiConstants";

import {generateAuthConfig, generateCartConfig} from "../request/axiosRequestConfig";

// util imports
import {updateShippingInfo} from "../users/shippingInfoUtils";

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

const updateQuantity = (newQuantity, product, cartContext, setCartContext, setMessage) => {
    if(newQuantity > 25 || newQuantity < 1) {
        setMessage("Quantity cant be greater than 25 or less than 1!");
        localStorage.setItem("apiMessage", "Quantity cant be greater than 25 or less than 1!");
    } else {
        let cartProduct = cartContext.products.findIndex(object => object.product === product.product && object.size === product.size);
        cartContext.products[cartProduct].quantity = newQuantity;
        setCartContext(cartContext);
        localStorage.setItem("cart", JSON.stringify(cartContext));
    }
};

const removeFromCart = (product, cartContext, setCartContext) => {
    let cartProduct = cartContext.products.findIndex(object => object.product === product.product && object.size === product.size);
    setCartContext(cartContext.products.splice(cartProduct, 1));
    localStorage.setItem("cart", JSON.stringify(cartContext));
    window.location.href = "/cart";
};

const validateFields = (shippingInfo) => {
    for (let i in shippingInfo) {
        if (!shippingInfo[i] || shippingInfo[i] === undefined) {
            return false;
        }
    }
    return true;
};

const completeOrder = async (cart, shippingInfo, setShippingInfo, user, setMessage) => {
    if (validateFields(shippingInfo) === false) {
        setMessage("Please enter shipping information!");
    } else {
        await updateShippingInfo(user, shippingInfo, setShippingInfo, setMessage);
        await axios.post(`${API_URL}/order/create`, cart, generateAuthConfig()).then(result => {
            setMessage(result.data.message);
            localStorage.setItem("apiMessage", result.data.message);
            window.location.href = "/";
        });
    }

};

export {
    addToCart,
    getCartProducts,
    updateQuantity,
    removeFromCart,
    completeOrder
}