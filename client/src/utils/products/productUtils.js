import axios from "axios";
import {API_URL} from "../constants/apiConstants";

const initProducts = (setProducts, category) => {
    axios.get(`${API_URL}/products/list`, {"params": {"category": category}}).then((response) => {
        setProducts(response.data.data);
    }).catch(err => {
        console.log(err.response);
    })
}

const searchProducts = (e, setProducts, searchQuery, setMessage) => {
    e.preventDefault();
    if(searchQuery === "") {
        initProducts(setProducts);
        setMessage("Search parameter cannot be empty.");
        localStorage.setItem("apiMessage", "Search parameter cannot be empty.");
    } else {
        axios.get(`${API_URL}/products/search`, {"params": {"keyword": searchQuery}}).then((result) => {
            // console.log(result);
            setProducts(result.data.data);
        }).catch(err => {
            // setMessage(err.response.data.message);
            console.log(err.response);
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