import useLocalStorage from "./useLocalStorage";

const userDarkMode = (key, initialValue) => {
  // change app state darkMode
  //set localStorage

  const [darkMode, setMode] = useLocalStorage(key, initialValue);

  const setDarkModeUpdated = value => {
    setMode(value);
    document.body.classList.toggle("dark-mode");
  };

  return [darkMode, setDarkModeUpdated];
};

export default userDarkMode;
