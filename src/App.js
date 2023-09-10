import { React, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
// import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = React.createContext();
function App() {
  const [darkTheme, setdarktheme] = useState(true);

  const toggleTheme = () => {
    setdarktheme((prevdarkTheme) => !prevdarkTheme);
  };
  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {/* <ClassContextComponent /> */}
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
