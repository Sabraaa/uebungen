import React, { useState } from "react";
import useLocalstorage from "./hooks/useLocalStorage";

const FakeApp = () => {
  const [name, setName] = useLocalstorage('name', "");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default FakeApp;
