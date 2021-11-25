import React, {useState, useEffect} from "react";
import './App.css';
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

const App = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [message, setMessage] = useState(localStorage.getItem("apiMessage"));
    const [user, setUser] = useState({
        email: localStorage.getItem("userEmail"),
        firstName: localStorage.getItem("userFirstName"),
        lastName: localStorage.getItem("userLastName"),
        token: localStorage.getItem("userToken"),
        userId: localStorage.getItem("userId"),
        userType: localStorage.getItem("userType")
    });

    useEffect(() => {
        if (!isAuth) {
            setIsAuth(!!user.token);
        }
    }, [isAuth, user.token]);

    return (
        <div className="App">
            <UserContext.Provider value={{user, setUser}}>
                <ApiMessageContext.Provider value={{message, setMessage}}>
                    <Header isAuth={isAuth}/>
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