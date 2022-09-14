import React, { createContext } from "react";
import { Theme as theme } from "./Theme";

type ThemeContextProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext(theme);
export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
