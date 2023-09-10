import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  },[number]);
  const themeStyle = useMemo(()=>{
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  },[dark])
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        click to change theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(number) {
  for (let i = 0; i < 10000000000; i++){} return number * 2;
}

export default App;
