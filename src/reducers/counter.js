import React from "react";

const counter = () => {
  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;

      default:
        break;
    }
  };

  return <div>counter</div>;
};

export default counter;
