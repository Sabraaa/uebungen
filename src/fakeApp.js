import React, { useReducer } from "react";
const ACTIONS={
  INC:"increment",
  DEC:"decrement"
}
const FakeApp = () => {
  const reducer =(state, action)=>{
    switch (action.type) {
      case ACTIONS.INC:
        return {count:state.count-1}
      case ACTIONS.DEC:
        return {count:state.count+1}
    
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {count:0})

  const decCount = () => {
    dispatch({type:ACTIONS.INC});

  };
  const incCount = () => {
    dispatch({type:ACTIONS.DEC});
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
