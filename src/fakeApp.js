import React, { useCallback, useState } from "react";
import List from "./List";

const FakeApp = () => {
  const [number, setNUmber] = useState(0);
  const [dark, setDark] = useState(false);


  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  },[number])
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNUmber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        TOGGLE THEME
      </button>
      <List getItems={getItems}/>
    </div>
  );
};

export default FakeApp;
