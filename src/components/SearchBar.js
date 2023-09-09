import React, { useState } from "react";

const SearchBar = (event) => {
  const [change, setChange] = useState("");

  const changeHandler = (event) => {
    setChange(event.target.value);
  };
  return (
    <div>
      <form>
        <div>
          <label> Image search </label>
          <input type="text" onChange={changeHandler}></input>
          <span>{change}</span>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
