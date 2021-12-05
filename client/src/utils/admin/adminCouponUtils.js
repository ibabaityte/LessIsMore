import axios from "axios";
import {API_URL} from "../constants/apiConstants";
import {generateAuthConfig} from "../request/axiosRequestConfig";

const fetchCoupons = (setCouponsList) => {
    axios.get(`${API_URL}/coupons/list`, generateAuthConfig()).then((result) => {
        // console.log(result);
        setCouponsList(result.data.data);
    })
};

const createCoupon = (e, coupon, fetchCoupons, setCouponsList, setMessage, setCode) => {
    e.preventDefault();
    axios.post(`${API_URL}/coupons/create`, coupon, generateAuthConfig()).then(() => {
        fetchCoupons(setCouponsList);
    }).catch(() => {
        // console.log(err.response);
        setMessage("Something went wrong while creating a coupon. Try again.");
        setCode("400");
        localStorage.setItem("apiMessage", "Something went wrong while creating a coupon. Try again.");
        localStorage.setItem("code", "400");
    });
};

const removeCoupon = (couponId, fetchCoupons, setCouponsList) => {
    axios.delete(`${API_URL}/coupons/${couponId}`, generateAuthConfig()).then(() => {
        fetchCoupons(setCouponsList);
    })
}

export {
    fetchCoupons,
    createCoupon,
    removeCoupon
}