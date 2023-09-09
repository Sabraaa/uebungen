import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
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
      <div style={themeStyle}>
          {doubleNumber}
      </div>
    </div>
  );
}

function slowFunction(num){
  for (let i = 0; i<1000000; i++ )
  return num *2
}

export default App;
