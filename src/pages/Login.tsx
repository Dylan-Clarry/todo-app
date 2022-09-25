import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.style.scss";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleTogglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHidePassword(!hidePassword);
  };

  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form">
          <input placeholder="Username" type="text" />
          <div>
            <input
              placeholder="Password"
              type={hidePassword ? "password" : "text"}
            />
            <button className="eye-toggle-btn" onClick={handleTogglePassword}>
              <FontAwesomeIcon
                className="eye-toggle"
                icon={hidePassword ? faEye : faEyeSlash}
              />
            </button>
          </div>
          <button className="login__btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
