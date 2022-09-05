import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <header>
            <nav>
                <a href="#" className="logo-link">
                    <FontAwesomeIcon className="logo" alt="logo" icon={faHippo} />
                </a>
                <ul className="nav-links">
                    <li className="nav-item"><a href="#">Projects</a></li>
                    <li className="nav-item"><a href="#">Settings</a></li>
                    <li className="nav-item"><a href="#">Item #3</a></li>
                </ul>
                <a className="account-icon" href="#">
                    <FontAwesomeIcon className="user-profile" alt="user-profile" icon={faUserCircle} />
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
