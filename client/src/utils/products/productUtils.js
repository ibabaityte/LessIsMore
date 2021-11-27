import axios from "axios";
import {API_URL} from "../constants/apiConstants";

const initProducts = (setProducts) => {
    axios.get(`${API_URL}/products/list`).then((response) => {
        setProducts(response.data.data);
    });
}

const searchProducts = (e, setProducts, searchQuery, setMessage) => {
    e.preventDefault();
    console.log(searchQuery);
    if(searchQuery === "") {
        initProducts(setProducts);
        setMessage("Search parameter cannot be empty.");
    } else {
        axios.get(`${API_URL}/products/search`, {"params": {"keyword": searchQuery}}).then((result) => {
            console.log(result);
            setProducts(result.data.data);
        }).catch(err => {
            // setMessage(err.response.data.message);
            console.log(err.response);
        });
    }
};

export {
    initProducts,
    searchProducts
}