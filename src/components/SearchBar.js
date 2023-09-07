import React, { useState } from "react";

const SearchBar = (event) => {
  const [change, setChange] = useState("sag");
  // setChange();
  console.log(event.target);

  return (
    <div>
      <form>
        <div>
          <label> Image search </label>
          <input type="text" onChange={setChange}></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
