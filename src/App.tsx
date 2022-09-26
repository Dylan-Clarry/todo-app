import React from "react";
import "./assets/styles/global.scss";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";

const App = () => {
  //const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    console.log("asdf");
  });
  //asd;flasdf
  return (
    <ThemeContextProvider>
      <div id="main-container">
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
