import React from "react";

const SearchBar = (event) => { 
  const onChangeHandler =(event)=>{
console.log(event.target.value)
  }
  // console.log(event.prototype);
  return (
    <div>
      <form>
        <div>
          <label> Image search </label>
          <input type="text" onChange={onChangeHandler}></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
