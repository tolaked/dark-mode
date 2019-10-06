import React from "react";
import useLocalStorage from "./userLocalStorage";

const useDarkMode = (key, initialValue) => {
  // change app state darkMode
  //set localStorage

  const [darkMode, setMode] = useLocalStorage(key, initialValue);

  const setDarkModeUpdated = value => {
    setMode(value);
    document.body.classList.toggle("dark-mode");
  };

  return [darkMode, setDarkModeUpdated];
};

export default useDarkMode;
