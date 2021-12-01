import axios from "axios";

// url import
import {API_URL} from "../constants/apiConstants";
import {initFavorites} from "../users/userUtils";

// request config import
import {generateRequestConfig} from "../request/axiosRequestConfig";

const updateFavorites = (favorites, user, setFavorites) => {
    console.log(favorites);
    axios.put(`${API_URL}/${user.userId}`, {favorites:favorites}, generateRequestConfig())
        .then((result) => {
            console.log(result.data);
            initFavorites(user, setFavorites);
        }).catch(err => {
            console.log(err);
    });
};

export {
    updateFavorites
};