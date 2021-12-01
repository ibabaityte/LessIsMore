import axios from "axios";
import {API_URL} from "../constants/apiConstants";
import {generateAuthConfig} from "../request/axiosRequestConfig";

const fetchCoupons = (setCoupons) => {
    axios.get(`${API_URL}/coupons/list`, generateAuthConfig()).then((result) => {
        console.log(result);
        setCoupons(result.data.data);
    })
};

export {
    fetchCoupons
}