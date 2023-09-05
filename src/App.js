import "./App.css";
import useRandomColor from "./useRandomColor";

function App() {
  const { color, changeColor } = useRandomColor();
  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", background: "#" + color }}
    >
      <button
        type="button"
        onClick={() => {
          changeColor();
        }}
      >
        Click To Change background Color
      </button>
    </div>
  );
}

export default App;
