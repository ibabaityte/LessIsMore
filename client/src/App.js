import React, {useState, useEffect, useContext} from "react";
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
import {CartContext} from "./utils/context/CartContext";

// util imports
import {automaticLogout} from "./utils/users/userUtils";

// style imports
import './App.css';
import UserProfile from "./components/users/UserProfile";
import Login from "./components/users/Login";
import Register from "./components/users/Register";

const App = () => {

    const {cartContext, setCartContext} = useContext(CartContext);

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
        if(!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify({
                products: [],
                comment: "",
                bill: null
            }))
        }
    }, [user.expirationTimestamp]);

    return (
        <div className="App">
            <UserContext.Provider value={{user, setUser}}>
                <ApiMessageContext.Provider value={{message, setMessage}}>
                    <CartContext.Provider value={{cartContext, setCartContext}}>
                        <Header/>
                        <Subscribe modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                        <Routes>
                            <Route path="/*" element={<Products/>}/>
                            <Route path="/adminPanel/*" element={<AdminPanel/>}/>
                            <Route path="/userProfile/*" element={<UserProfile/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="register" element={<Register/>}/>
                        </Routes>
                        <Footer setModalOpen={setModalOpen}/>
                    </CartContext.Provider>
                </ApiMessageContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;