import React, { useState,useReducer } from "react";

const FakeApp = () => {
  const reducer =(state, action)=>{
    switch (action.type) {
      case "dec":
        return {count:state.count-1}
      case "inc":
        return {count:state.count+1}
    
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {count:0})

  const decCount = () => {
    dispatch({type:"dec"});

  };
  const incCount = () => {
    dispatch({type:"inc"});
  };
  return (
    <div>
      <button onClick={decCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incCount}>+</button>
    </div>
  );
};

export default FakeApp;
