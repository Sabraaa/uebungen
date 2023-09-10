import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState("");
  // const inputRef = useRef("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name
  }, [name]);


  // const focus = () => {
    // inputRef.current.focus();
    // inputRef.current.value = "type here"
  // };

  return (
    <div>
      <input
        // ref={inputRef}
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <span>My Name Is {name} and it used to be {prevName.current}</span>
      {/* <button onClick={focus}>click to focus</button> */}
    </div>
  );
}

export default App;
