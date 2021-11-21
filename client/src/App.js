import React, {useState} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";

// component imports
import Header from "./components/Header";
import ProductList from "./components/shop/ProductList";
import AdminPanel from "./components/admin/AdminPanel";

// context imports
import {ApiMessageContext} from "./utils/context/ApiMessageContext.js";
import {UserContext} from "./utils/context/UserContext";

const App = () => {

    const {
        Email,
        UserType,
        // LoginToken
        // ExpirationTimestamp
    } = localStorage;

    const [message, setMessage] = useState(localStorage.getItem("apiMessage"));
    const [user, setUser] = useState({
        email: localStorage.getItem("userEmail"),
        firstName: localStorage.getItem("userFirstName"),
        lastName: localStorage.getItem("userLastName"),
        token: localStorage.getItem("userToken")
    });

    return (
        <div className="App">
                <UserContext.Provider value={{user, setUser}}>
                    <ApiMessageContext.Provider value={{message, setMessage}}>
                        <Header email={Email} userType={UserType}/>
                        <Routes>
                            <Route path="/" element={<ProductList/>}/>
                            <Route path="/adminPanel" element={<AdminPanel/>}/>
                        </Routes>
                    </ApiMessageContext.Provider>
                </UserContext.Provider>
        </div>
    );
}

export default App;