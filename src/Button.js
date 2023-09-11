import React, { useContext } from "react";
import { Sabra } from "./useContext";

const Button = () => {
  const { changeMode } = useContext(Sabra);

  return (
    <div>
      <button onClick={changeMode}>Click to change the Theme</button>
    </div>
  );
};

export default Button;
