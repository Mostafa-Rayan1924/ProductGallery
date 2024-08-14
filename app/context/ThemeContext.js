"use client";
const { createContext } = require("react");
import { useState } from "react";

export let themeContextMode = createContext("");
const ThemeContextProvider = ({ children }) => {
  let [toggleMode, setToggleMode] = useState("light");
  return (
    <themeContextMode.Provider value={{ toggleMode, setToggleMode }}>
      {children}
    </themeContextMode.Provider>
  );
};

export default ThemeContextProvider;
