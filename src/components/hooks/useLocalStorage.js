import React, { useState } from "react";

// // const useLocalStorage=(key, initialValue)=> {

// //     let value= localStorage.getItem(key);
// //     if(!value) value= initialValue

// //     const [someValue, setSomeValue] =useState(value)
// //      return [someValue, setSomeValue]
// //
// // }

// const userDarkMode = (key, initialValue) => {
//   // change app state darkMode
//   //set localStorage

// //   let data = localStorage.getItem(key);
// // //   if (!value) value = initialValue;
// //   const [darkMode, setDarkMode] = useState(data||initialValue);

// //   const setDarkModeUpdated = value => {
// //     setDarkMode(value); //Updates the state
// //     localStorage.setItem(key,JSON.stringify(value)); //always set as string wen setting item
// //   };
// const [darkMode,setMode] =useLocalStorage(key,initialValue)

//     const  setDarkModeUpdated=(value)=>{
//         setMode(value);
//         document.body.classList.toggle('dark-mode')
//     }

//   return [darkMode, setDarkModeUpdated];
// };

// const useLocalStorage=()=>{

//     const [darkMode, setDarkMode]

//     let data = localStorage.getItem(key);
// //   if (!value) value = initialValue;
//   const [darkMode, setDarkMode] = useState(data||initialValue);

//     const setMode = value => {
//         setDarkMode(value); //Updates the state
//         localStorage.setItem(key,JSON.stringify(value)); //always set as string wen setting item
//       };

//     return [storedDarkMode,setMode]
// }

// export default useLocalStorage;

const useLocalStorage = (key, initialValue) => {
  // const [darkMode, setDarkMode]

  let data = localStorage.getItem(key);
  //   if (!value) value = initialValue;
  const [storedDarkMode, setDarkMode] = useState(data || initialValue);

  const setMode = value => {
    setDarkMode(value); //Updates the state
    localStorage.setItem(key, JSON.stringify(value)); //always set as string wen setting item
  };

  return [storedDarkMode, setMode];
};

export default useLocalStorage;
