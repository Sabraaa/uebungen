import React from "react";
import { createStore } from "redux";

// STORE
// let store = createStore()

//ACTION
const increment = () => {
  return {
    type: "INC",
  };
};
const decrement = () => {
  return {
    type: "DEC",
  };
};
//  REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;

    default:
      break;
  }
};

let store = createStore(counter);

// clg
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());

const FakeApp = () => {
  return <div>hi</div>;
};

export default FakeApp;
