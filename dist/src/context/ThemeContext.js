import React, { createContext } from "react";
import { Theme as theme } from "./Theme";
const ThemeContext = createContext(theme);
export const ThemeContextProvider = ({ children }) => {
    return (React.createElement(ThemeContext.Provider, { value: theme }, children));
};
//# sourceMappingURL=ThemeContext.js.map