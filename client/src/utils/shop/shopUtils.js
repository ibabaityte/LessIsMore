import axios from "axios";
import {API_URL} from "../constants/apiConstants";

import {generateAuthConfig, generateCartConfig, generateRemoveFromCartConfig} from "../request/axiosRequestConfig";

// util imports
import {updateShippingInfo} from "../users/shippingInfoUtils";

const addToCart = (userId, product, size, setMessage, setCode) => {
    axios.post(`${API_URL}/cartItem/create`, {userId: userId, productId: product._id, size: size, quantity: 1}, generateAuthConfig()).then(result => {
        setMessage(result.data.message);
        setCode(result.data.code);
    }).catch(err => {
        setMessage(err.response.message);
        setCode(err.response.code);
    });
};

const getCart = (setCart, setBill) => {
    axios.get(`${API_URL}/cartItem/list`, generateCartConfig()).then((result) => {
        setCart(result.data.data);
        let bill = 0;
        for(let i in result.data.data) {
            bill += result.data.data[i].productId.price;
        }
        setBill(bill);
    });
}

const updateQuantity = (newQuantity, itemId, setMessage, setCode) => {
    if(newQuantity > 25 || newQuantity < 1) {
        setMessage("Quantity cant be greater than 25 or less than 1!");
        setCode("400");
        localStorage.setItem("apiMessage", "Quantity cant be greater than 25 or less than 1!");
        localStorage.setItem("code", "400");
    } else {
        axios.put(`${API_URL}/cartItem/update`, {itemId: itemId, quantity: newQuantity}, generateAuthConfig()).then(result => {
            console.log(result);
        }).catch(err => {
            setMessage(err.response.message);
            setCode(err.response.code);
            localStorage.setItem("apiMessage", err.response.message);
            localStorage.setItem("code", err.response.code);
        });
    }
};

const removeFromCart = (cartItemId, setMessage, setCode) => {
    axios.delete(`${API_URL}/cartItem/remove`, generateRemoveFromCartConfig(cartItemId)).then(result => {
        setMessage(result.data.message);
        setCode(result.data.code);
        localStorage.setItem("apiMessage", result.data.message);
        localStorage.setItem("code", result.data.code);
        window.location.href = "/cart";
    }).catch(err => {
        setMessage(err.response.message);
        setCode(err.response.code);
        localStorage.setItem("apiMessage", err.response.message);
        localStorage.setItem("code", err.response.code);
    });
};

const validateFields = (shippingInfo) => {
    for (let i in shippingInfo) {
        if (!shippingInfo[i] || shippingInfo[i] === undefined) {
            return false;
        }
    }
    return true;
};

const clearCart = (user) => {
    axios.delete(`${API_URL}/cartItem/clear`, {'headers': {'Authorization': localStorage.getItem('userToken'), 'userId': `${user.userId}`}}).then(result => {
        console.log(result.data);
    }).catch(err => {
        console.log(err);
    });
}

const completeOrder = async (cart, bill, shippingInfo, setShippingInfo, user, setMessage, setCode) => {
    if(bill === null || bill === 0) {
        setMessage("Cart cannot be empty!");
        setCode("400");
        localStorage.setItem("apiMessage", "Cart cannot be empty!");
        localStorage.setItem("code", "400");
    } else {
        if (validateFields(shippingInfo) === false) {
            setMessage("Please enter shipping information!");
            setCode("400");
            localStorage.setItem("apiMessage", "Please enter shipping information!");
            localStorage.setItem("code", "400");
        } else {
            await updateShippingInfo(user, shippingInfo, setShippingInfo, setMessage, setCode);
            await axios.post(`${API_URL}/order/create`, {cart: cart, bill: bill}, generateAuthConfig()).then(result => {
                setMessage(result.data.message);
                setCode("200");
                localStorage.setItem("apiMessage", result.data.message);
                localStorage.setItem("code", "200");
                window.location.href = "/";
                clearCart(user);
            }).catch(err => {
                console.log(err);
            });
        }
    }
};

export {
    addToCart,
    getCart,
    updateQuantity,
    removeFromCart,
    completeOrder
}