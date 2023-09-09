import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState("");
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${res}`)
    .then(response=> response.json())
}, [res])



  return (
    <div>
      <div style={{ margin: "20px" }}>
        <button style={{height:"50px", width:"100px", margin:"10px"}}  onClick={() => setRes("posts")}>Posts</button>
        <button style={{height:"50px", width:"100px", margin:"10px"}} onClick={() => setRes("users")}>Users</button>
        <button style={{height:"50px", width:"100px", margin:"10px"}} onClick={() => setRes("comments")}>Comments</button>
      </div>
      <h1 style={{margin:"50px"}}>  {res} </h1>

    </div>
  );
}

export default App;
