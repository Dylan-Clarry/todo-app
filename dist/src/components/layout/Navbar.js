var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import "./Navbar.style.scss";
import { Link } from "react-router-dom";
import { useMatch, useResolvedPath } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ToggleSwitch from "../ui/ToggleSwitch";
const CustomLink = (_a) => {
    var { to, children } = _a, props = __rest(_a, ["to", "children"]);
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (React.createElement("li", { className: isActive ? "active" : "" },
        React.createElement(Link, Object.assign({ to: to }, props), children)));
};
const Navbar = () => {
    const handleSetTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (React.createElement("header", null,
        React.createElement("nav", { className: "nav" },
            React.createElement(Link, { to: "/", className: "nav__logo" },
                React.createElement(FontAwesomeIcon, { className: "logo", alt: "logo", icon: faBug })),
            React.createElement("ul", { className: "nav__links" },
                React.createElement("li", { className: "nav__item" },
                    React.createElement(Link, { to: "/" }, "Projects")),
                React.createElement("li", { className: "nav__item" },
                    React.createElement(Link, { to: "Settings" }, "Settings"))),
            React.createElement("div", { onClick: handleSetTheme },
                React.createElement(ToggleSwitch, null)),
            React.createElement(Link, { className: "account-icon", to: "/Account" },
                React.createElement(FontAwesomeIcon, { className: "user-profile", alt: "user-profile", icon: faUserCircle })))));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map