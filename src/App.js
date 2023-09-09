import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("blue");

  const decCount = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme("red");
  };
  const incCount = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme("green");
    // setCount(count + 1);
  };
  return (
    <div style={{ margin: "20px" }}>
      <button style={{ height: "50px", width: "40px" }} onClick={decCount}>
        -
      </button>
      <span style={{ height: "50px", width: "40px", margin: "20px" }}>
        {count}
      </span>
      <span style={{ height: "50px", width: "40px", margin: "20px" }}>
        {theme}
      </span>
      <button style={{ height: "50px", width: "40px" }} onClick={incCount}>
        +
      </button>
    </div>
  );
}

export default App;
