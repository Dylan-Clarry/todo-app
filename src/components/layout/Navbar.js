import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../context/ThemeContext";
import ToggleSwitch from "../ui/ToggleSwitch";
import "./Navbar.style.scss";

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleSetTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header>
            <nav className="nav">
                <a href="#" className="nav__logo">
                    <FontAwesomeIcon className="logo" alt="logo" icon={faBug} />
                </a>
                <ul className="nav__links">
                    <li className="nav__item">
                        <a href="#">Projects</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">Settings</a>
                    </li>
                    <li className="nav__item">
                        <a onClick={handleSetTheme} href="#">
                            Item #3
                        </a>
                    </li>
                </ul>
                <ToggleSwitch />
                <a className="account-icon" href="#">
                    <FontAwesomeIcon
                        className="user-profile"
                        alt="user-profile"
                        icon={faUserCircle}
                    />
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
