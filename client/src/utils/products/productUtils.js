import axios from "axios";
import {API_URL} from "../constants/apiConstants";

const initProducts = (setProducts, category) => {
    axios.get(`${API_URL}/products/list`, {"params": {"category": category}}).then((response) => {
        setProducts(response.data.data);
    }).catch(err => {
        console.log(err.response);
    })
}

const searchProducts = (e, setProducts, searchQuery, setMessage, setCode) => {
    e.preventDefault();
    if(searchQuery === "") {
        initProducts(setProducts);
        setMessage("Search parameter cannot be empty. Please enter a search query you want to search");
        setCode("400");
        localStorage.setItem("apiMessage", "Search parameter cannot be empty. Please enter a search query you want to search");
        localStorage.setItem("code", "400");
    } else {
        axios.get(`${API_URL}/products/search`, {"params": {"keyword": searchQuery}}).then((result) => {
            console.log(result);
            setProducts(result.data.data);
        }).catch(err => {
            console.log(err.response);
            setMessage(err.response.data.message);
            setCode("400");
            localStorage.setItem("apiMessage", err.response.data.message);
            localStorage.setItem("code", "400");
        });
    }
};

const clearSearch = (setProducts, category, setSearchQuery) => {
        initProducts(setProducts, category);
        setSearchQuery("");
};

export {
    initProducts,
    searchProducts,
    clearSearch
}