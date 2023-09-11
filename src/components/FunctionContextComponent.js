import { React, useContext } from "react";
import { SabraContext } from "../hooks/useContext";

const FunctionContextComponent = () => {
  const { darkMode } = useContext(SabraContext);

  const themeStyles = {
    backgroundColor: darkMode ? "#333" : "#ccc",
    color: darkMode ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={themeStyles}>THEME</div>;
};

export default FunctionContextComponent;
