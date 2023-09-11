import React, { useContext } from "react";
import { SabraContext } from "../hooks/useContext";

const Button = () => {
  const { changeMode } = useContext(SabraContext);

  return (
    <div>
      <button onClick={changeMode}>Click to change the Theme</button>
    </div>
  );
};

export default Button;
