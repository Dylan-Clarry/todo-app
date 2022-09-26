import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.style.scss";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const navigate = useNavigate();

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleDemoLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setUsernameInput("password");
    setPasswordInput("password");
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  const handleTogglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHidePassword(!hidePassword);
  };

  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form">
          <input
            onChange={handleUsernameInput}
            placeholder="Username"
            type="text"
            value={usernameInput}
          />
          <div>
            <input
              onChange={handlePasswordInput}
              placeholder="Password"
              type={hidePassword ? "password" : "text"}
              value={passwordInput}
            />
            <button className="eye-toggle-btn" onClick={handleTogglePassword}>
              <FontAwesomeIcon
                className="eye-toggle"
                icon={hidePassword ? faEye : faEyeSlash}
              />
            </button>
          </div>
          <button className="login__btn" onClick={handleLogin}>
            Login
          </button>
          <a className="demo-login" onClick={handleDemoLogin}>
            <u>Demo Login</u>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
