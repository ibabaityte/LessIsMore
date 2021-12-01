import axios from "axios";
import {API_URL} from "../constants/apiConstants";

const subscribe = (subscriberEmail, setMessage) => {
      axios.post(`${API_URL}/subscribers/create`, {email: subscriberEmail}).then(result => {
          setMessage(result.data.message);
          localStorage.setItem("apiMessage", result.data.message);
      }).catch(err => {
         console.log(err.response.data.message);
         setMessage(err.response.data.message);
          localStorage.setItem("apiMessage", err.response.data.message);
      });
};

export {
    subscribe
}

