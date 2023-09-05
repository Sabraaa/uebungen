import useQuery from "./useQuery";
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <button onClick={getQuote}> click to get a Quote </button>
        <h1>{quote}</h1>
      </div>
    </div>
  );
}

export default App;
