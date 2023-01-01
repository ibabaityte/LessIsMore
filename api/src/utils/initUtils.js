import axios from "axios";

const initAdmin = () => {
    axios.get("http://localhost:8080/admin/init").then((result) => {
        console.log(result.data.message);
    }).catch(err => {
        console.log(err);
    });
}

export {initAdmin};
