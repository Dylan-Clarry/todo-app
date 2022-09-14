import React from "react";
import "./Navbar.style.scss";
import { Link } from "react-router-dom";
import { useContext, useMatch, useResolvedPath } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faUserCircle } from "@fortawesome/free-solid-svg-icons";
//import ThemeContext from "../../context/ThemeContext";
import ToggleSwitch from "../ui/ToggleSwitch";

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  //const { theme, setTheme } = useContext(ThemeContext);

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__logo">
          <FontAwesomeIcon className="logo" alt="logo" icon={faBug} />
        </Link>
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/">Projects</Link>
          </li>
          <li className="nav__item">
            <Link to="Settings">Settings</Link>
          </li>
        </ul>
        <div onClick={handleSetTheme}>
          <ToggleSwitch />
        </div>
        <Link className="account-icon" to="/Account">
          <FontAwesomeIcon
            className="user-profile"
            alt="user-profile"
            icon={faUserCircle}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
