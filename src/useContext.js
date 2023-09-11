import React, { createContext, useState } from "react";

export const Sabra = createContext();

const SabraContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const changeMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div>
      <SabraContext.Provider value={{ darkMode, changeMode }}>
        {children}
      </SabraContext.Provider>
    </div>
  );
};

export default SabraContext;
