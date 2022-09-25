import React from "react";
import { useState } from "react";
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
          <input
            placeholder="Password"
            type={hidePassword ? "password" : "text"}
          />
          <button onClick={handleTogglePassword}>Show Password</button>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
