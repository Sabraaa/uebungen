import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState('');
  const [renderCount] = useRef(0)


  useEffect(()=>{
      renderCount.current = renderCount.current + 1 

  })
console.log(renderCount)
  return (
    <div>
      <input value={name} onChange={(e) => setname(e.target.value)} />
      <span>My Name Is {name}</span>
      <span> I rendered {renderCount.current} times </span>
    </div>
  );
}

export default App;
