import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
        React.createElement(App, null))));
//# sourceMappingURL=index.js.map