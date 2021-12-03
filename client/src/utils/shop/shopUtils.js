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

const updateQuantity = (quantity, productId, cartContext, setCartContext) => {
    let cartProduct = cartContext.products.find(object => object.product === productId);
    cartProduct.quantity = quantity;
    setCartContext(cartContext);
    localStorage.setItem("cart", JSON.stringify(cartContext));
};

export {
    addToCart,
    getCartProducts,
    updateQuantity
}