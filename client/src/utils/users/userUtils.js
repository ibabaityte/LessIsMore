import axios from "axios";
import {API_URL, LOGIN_URL, REGISTER_URL} from "../constants/apiConstants.js";
import {generateRequestConfig} from "../request/axiosRequestConfig";

const login = (setMessage, setUser, user) => {
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

            // console.log(user.userId);

            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userFirstName", user.firstName);
            localStorage.setItem("userLastName", user.lastName);
            localStorage.setItem("userToken", user.token);
            localStorage.setItem("userId", user.userId);
            localStorage.setItem("userType", user.userType);
            setUser(user);

            // API message context
            setMessage(result.data.message);
            localStorage.setItem("apiMessage", result.data.message);

            if(user.userType === "ADMIN") {
                window.location.href = "/adminPanel"
            } else {
                window.location.href = "/"
            }
        })
        .catch((err) => {
            // console.log(err);
            setMessage(err.response.data.message);
        });
}

const register = (setMessage, newUser, setNewUser) => {
    axios.post(REGISTER_URL, newUser)
        .then((result) => {
            // console.log(result);
            setNewUser(newUser);
            setMessage(result.data.message);
            localStorage.setItem("apiMessage", result.data.message);
            window.location.href = "/login"
        })
        .catch((err) => {
            console.log(err.response.data);
            setMessage(err.response.data.message);
        });
}

const logout = () => {
    localStorage.clear();
    window.location.href = "/";
}

const initFavorites = (user, favorites, setFavorites) => {
    console.log("init favorites");
    axios.get(`${API_URL}/${user.userId}`, generateRequestConfig()).then((response) => {
        // console.log(response.data.favorites);
        setFavorites(response.data.favorites);
    });
}

export {
    login,
    register,
    logout,
    initFavorites
}