import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
  }, [getItems]);
  return (
    <div>
      {items.map((item) => (
        <div key={item}> </div>
      ))}
    </div>
  );
};

export default List;
