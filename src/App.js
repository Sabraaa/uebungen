import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const decCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incCount = () => {
    setCount((prevCount) => prevCount + 1);
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
      <button style={{ height: "50px", width: "40px" }} onClick={incCount}>
        +
      </button>
    </div>
  );
}

export default App;
