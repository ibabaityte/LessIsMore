import axios from "axios";

// url import
import {API_URL} from "../constants/apiConstants";
import {initFavorites} from "../users/userUtils";

// request config import
import {generateRequestConfig} from "../request/axiosRequestConfig";

const updateFavorites = (favorites, user, setFavorites) => {
    axios.put(`${API_URL}/${user.userId}`, {favorites:favorites}, generateRequestConfig())
        .then(() => {
            // console.log(result.data);
            initFavorites(user, setFavorites);
        }).catch(err => {
            console.log(err);
    });
};

export {
    updateFavorites
};