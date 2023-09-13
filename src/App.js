import { useDispatch } from "react-redux";
import "./App.css";
import FakeApp from "./fakeApp";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  const { count } = useSelector((state) => state.counterRed);
  const dispatch = useDispatch();

  return (
    <div>
      <FakeApp />
      <h1> the count is : {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(15))}> +15</button>
    </div>
  );
}

export default App;
