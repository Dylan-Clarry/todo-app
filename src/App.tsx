import React from "react";
import "./assets/styles/global.scss";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ThemeContext from "./context/ThemeContext";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";

const App = () => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/account" element={<Account />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </ThemeContext.Provider>
    );
};

export default App;
