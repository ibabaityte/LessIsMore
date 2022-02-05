import axios from "axios";
import {API_URL} from "../constants/apiConstants";
import {generateAuthConfig} from "../request/axiosRequestConfig";

const fetchCoupons = (setCouponsList) => {
    axios.get(`${API_URL}/coupons/list`, generateAuthConfig()).then((result) => {
        // console.log(result);
        setCouponsList(result.data.data);
    })
};

const createCoupon = (e, coupon, fetchCoupons, setCouponsList, setCoupon, setMessage, setCode) => {
    e.preventDefault();
    axios.post(`${API_URL}/coupons/create`, coupon, generateAuthConfig()).then((result) => {
        fetchCoupons(setCouponsList);
        setCoupon("");
        setMessage(result.data.message);
        setCode("200");
        localStorage.setItem("apiMessage", result.data.message);
        localStorage.setItem("code", "200");
    }).catch((err) => {
        setMessage(err.response.data.message);
        setCode("400");
        localStorage.setItem("apiMessage", err.response.data.message);
        localStorage.setItem("code", "400");
    });
};

const removeCoupon = (couponId, fetchCoupons, setCouponsList, setMessage, setCode) => {
    axios.delete(`${API_URL}/coupons/${couponId}`, generateAuthConfig()).then(() => {
        fetchCoupons(setCouponsList);
        setMessage("Discount code deleted successfully");
        setCode("200");
        localStorage.setItem("apiMessage", "Discount code deleted successfully");
        localStorage.setItem("code", "200");
    }).catch(err => {
        console.log(err);
    })
}

export {
    fetchCoupons,
    createCoupon,
    removeCoupon
}