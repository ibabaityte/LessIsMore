import axios from "axios";
import {API_URL, LOGIN_URL, REGISTER_URL} from "../constants/apiConstants.js";
import {generateRequestConfig} from "../request/axiosRequestConfig";

const login = (setMessage, setUser, user, setCode) => {
    const {email, password} = user;
    axios.post(LOGIN_URL, {email, password})
        .then((result) => {
            // Stuff for setting context
            // User context
            const user = {
                email: result.data.email,
                firstName: result.data.firstName,
                lastName: result.data.lastName,
                token: result.data.token,
                userId: result.data.userId,
                userType: result.data.userType
            };

            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userFirstName", user.firstName);
            localStorage.setItem("userLastName", user.lastName);
            localStorage.setItem("userToken", user.token);
            localStorage.setItem("userId", user.userId);
            localStorage.setItem("userType", user.userType);
            localStorage.setItem('expirationTimestamp', result.data.expirationTimestamp);
            setUser(user);

            // API message context
            setMessage(result.data.message);
            setCode("200");
            localStorage.setItem("apiMessage", result.data.message);
            localStorage.setItem("code", "200");

            if(user.userType === "ADMIN") {
                window.location.href = "/adminPanel/products"
            } else {
                window.location.href = "/"
            }
        })
        .catch((err) => {
            // console.log(err);
            setMessage(err.response.data.message);
            setCode("400");
            localStorage.setItem("apiMessage", err.response.data.message);
            localStorage.setItem("code", "400");
        });
}

const register = (setMessage, newUser, setNewUser, setCode) => {
    axios.post(REGISTER_URL, newUser)
        .then((result) => {
            // console.log(result);
            setNewUser(newUser);
            setMessage(result.data.message);
            setCode("200");
            localStorage.setItem("apiMessage", result.data.message);
            localStorage.setItem("code", "200");
            window.location.href = "/login"
        })
        .catch((err) => {
            // console.log(err.response.data);
            setMessage(err.response.data.message);
            setCode("400");
            localStorage.setItem("apiMessage", err.response.data.message);
            localStorage.setItem("code", "400");
        });
}

const logout = () => {
    localStorage.clear();
    window.location.href = "/";
}

const initFavorites = (user, setFavorites) => {
    axios.get(`${API_URL}/${user.userId}`, generateRequestConfig()).then((response) => {
        // console.log(response);
        setFavorites(response.data.favorites);
    });
}

const automaticLogout = (ExpirationTimestamp) => {
    const delay = ExpirationTimestamp - Date.now();
    const expirationTimer = setTimeout(() => {
        if(delay >= 0) {
            localStorage.clear();
            window.location = '/';
        }
    }, delay);
    return () => clearTimeout(expirationTimer);
};

export {
    login,
    register,
    logout,
    initFavorites,
    automaticLogout
}