import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../context/ThemeContext";
import "./Navbar.style.scss";

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleSetTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header>
            <nav className="nav">
                <a href="#" className="nav__link">
                    <FontAwesomeIcon className="logo" alt="logo" icon={faBug} />[{theme}]
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
                <input type="checkbox" id="check" className="toggle-switch" />
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
