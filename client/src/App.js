import React, {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";

// component imports
import Header from "./components/Header";
import Products from "./components/products/Products";
import AdminPanel from "./components/admin/AdminPanel";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

// context imports
import {ApiMessageContext} from "./utils/context/ApiMessageContext.js";
import {UserContext} from "./utils/context/UserContext";

// util imports
import {automaticLogout} from "./utils/users/userUtils";

// style imports
import './App.css';

const App = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState(localStorage.getItem("apiMessage"));
    const [user, setUser] = useState({
        email: localStorage.getItem("userEmail"),
        firstName: localStorage.getItem("userFirstName"),
        lastName: localStorage.getItem("userLastName"),
        token: localStorage.getItem("userToken"),
        userId: localStorage.getItem("userId"),
        userType: localStorage.getItem("userType"),
        expirationTimestamp: localStorage.getItem("expirationTimestamp")
    });

    useEffect(() => {
        automaticLogout(user.expirationTimestamp);
    });

    return (
        <div className="App">
            <UserContext.Provider value={{user, setUser}}>
                <ApiMessageContext.Provider value={{message, setMessage}}>
                    <Header/>
                    <Subscribe modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                    <Routes>
                        <Route path="/*" element={<Products/>}/>
                        <Route path="/adminPanel" element={<AdminPanel/>}/>
                    </Routes>
                    <Footer setModalOpen={setModalOpen}/>
                </ApiMessageContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;