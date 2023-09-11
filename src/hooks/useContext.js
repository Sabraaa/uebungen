import React, { createContext, useState } from "react";

export const SabraContext = createContext();

const SabraProvider = ({ children }) => {
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

export default SabraProvider;
