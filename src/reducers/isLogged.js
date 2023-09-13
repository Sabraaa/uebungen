import React from "react";

const isLogged = () => {
  const isLoggedReducer = (state = false, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return !state;

      default:
        return state;
        break;
    }
  };

  return <div>isLogged</div>;
};

export default isLogged;
