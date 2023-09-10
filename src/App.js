import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState("");
  const inputRef = useRef();

  const focus = () => {

    inputRef.current.focus()
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <span>My Name Is {name}</span>
      <button onClick={focus}>click to focus</button>
    </div>
  );
}

export default App;
