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

const updateQuantity = (newQuantity, product, cartContext, setCartContext) => {
    let cartProduct = cartContext.products.findIndex(object => object.product === product.product && object.size === product.size);
    cartContext.products[cartProduct].quantity = newQuantity;
    setCartContext(cartContext);
    localStorage.setItem("cart", JSON.stringify(cartContext));
};

const removeFromCart = (product, cartContext, setCartContext) => {
    let cartProduct = cartContext.products.findIndex(object => object.product === product.product && object.size === product.size);
    setCartContext(cartContext.products.splice(cartProduct, 1));
    localStorage.setItem("cart", JSON.stringify(cartContext));
    window.location.href = "/cart";
};

export {
    addToCart,
    getCartProducts,
    updateQuantity,
    removeFromCart
}