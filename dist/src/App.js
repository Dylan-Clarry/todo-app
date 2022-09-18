import React from "react";
import "./assets/styles/global.scss";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { ThemeContextProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
const App = () => {
    useEffect(() => {
        console.log("asdf");
    });
    return (React.createElement(ThemeContextProvider, null,
        React.createElement(Navbar, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/settings", element: React.createElement(Settings, null) }),
            React.createElement(Route, { path: "/account", element: React.createElement(Account, null) }),
            React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }))));
};
export default App;
//# sourceMappingURL=App.js.map