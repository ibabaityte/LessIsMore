import axios from "axios";
import {API_URL} from "../constants/apiConstants";

const subscribe = (subscriberEmail, setMessage, setCode) => {
    axios.post(`${API_URL}/subscribers/create`, {email: subscriberEmail}).then(result => {
        setMessage(result.data.message);
        setCode("200");
        localStorage.setItem("apiMessage", result.data.message);
        localStorage.setItem("code", "200");
    }).catch(err => {
        // console.log(err.response.data.message);
        setMessage(err.response.data.message);
        setCode("400");
        localStorage.setItem("apiMessage", err.response.data.message);
        localStorage.setItem("code", "400");
    });
};

export {
    subscribe
}

