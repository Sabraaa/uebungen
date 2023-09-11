import "./App.css";
import FunctionContextComponent from "./FunctionContextComponent";
import Button from "./Button";
import SabraContext from "./useContext";



function App() {
  return (
    <div>
      <SabraContext>
        <Button/>
        <FunctionContextComponent />
      </SabraContext>
    </div>
  );
}

export default App;
