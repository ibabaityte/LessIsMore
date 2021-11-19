import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// component imports
import Layout from "./components/Layout.js";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Layout/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;