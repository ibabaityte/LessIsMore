import React, {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";

// component imports
import Header from "./components/Header";
import Products from "./components/products/Products";
import AdminPanel from "./components/admin/AdminPanel";
import Subscribe from "./components/Subscribe";
import UserProfile from "./components/users/UserProfile";
import Login from "./components/users/Login";
import Register from "./components/users/Register";

// context imports
import {ApiMessageContext} from "./utils/context/ApiMessageContext.js";
import {ApiCodeContext} from "./utils/context/ApiCodeContext.js";
import {UserContext} from "./utils/context/UserContext";

// util imports
import {automaticLogout} from "./utils/users/userUtils";
import {clearExpiredCart, getCart} from "./utils/shop/shopUtils";

// style imports
import './App.css';
import Grid from '@mui/material/Grid';

const App = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState(localStorage.getItem("apiMessage"));
    const [code, setCode] = useState(localStorage.getItem("code"));
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
    const [bill, setBill] = useState(0);
    const [user, setUser] = useState({
        email: localStorage.getItem("userEmail"),
        password: localStorage.getItem("password"),
        firstName: localStorage.getItem("userFirstName"),
        lastName: localStorage.getItem("userLastName"),
        token: localStorage.getItem("userToken"),
        userId: localStorage.getItem("userId"),
        userType: localStorage.getItem("userType"),
        expirationTimestamp: localStorage.getItem("expirationTimestamp")
    });

    useEffect(() => {
        // automatic logout method
        automaticLogout(user.expirationTimestamp);
        // initializing cart and bill state
        if(user.token) {
            getCart(setCart, setBill);
            clearExpiredCart(cart, user);
        }
        // deleting user cart after 24 hours from adding last item to the cart
        // clearing error and success messages after every 5 seconds 
        const timer = setTimeout(() => {
            setMessage("");
            setCode("");
            localStorage.setItem("apiMessage", "");
            localStorage.setItem("code", "");
        }, 5000);
        return () => clearTimeout(timer);
    }, [user.expirationTimestamp, code, message]);

    return (
        <div className="backgroundImage">
            <Grid container className="App">
                <UserContext.Provider value={{user, setUser}}>
                    <ApiMessageContext.Provider value={{message, setMessage}}>
                        <ApiCodeContext.Provider value={{code, setCode}}>
                            <Subscribe modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                            <Grid item xs={12}>
                                <Header
                                    setModalOpen={setModalOpen}
                                />
                            </Grid>
                            <Grid item xs={12} style={{minHeight: "100vh"}}>
                                <Routes>
                                    <Route path="/*" element={<Products/>}/>
                                    <Route path="/adminPanel/*" element={<AdminPanel/>}/>
                                    <Route path="/userProfile/*" element={<UserProfile/>}/>
                                    <Route path="login" element={<Login/>}/>
                                    <Route path="register" element={<Register/>}/>
                                </Routes>
                            </Grid>
                        </ApiCodeContext.Provider>
                    </ApiMessageContext.Provider>
                </UserContext.Provider>
            </Grid>
        </div>
    );
}

export default App;