import React from "react";
import { useSelector } from "react-redux";

const FakeApp = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Counter</h1>
    </div>
  );
};

export default FakeApp;
