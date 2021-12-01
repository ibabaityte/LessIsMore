import axios from "axios";

import {API_URL} from "../constants/apiConstants";
import {generateAuthConfig} from "../request/axiosRequestConfig";

const fetchSubscribers = (setSubscribers) => {
    axios.get(`${API_URL}/subscribers/list`, generateAuthConfig()).then(result => {
        setSubscribers(result.data.data);
    })
};

export {
    fetchSubscribers
};