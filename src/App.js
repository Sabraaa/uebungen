import "./App.css";
import FakeApp from "./fakeApp";
import FunctionContextComponent from "./FunctionContextComponent";
import Button from "./Button";
import SabraContext from "./useContext";



function App() {
  return (
    <div>
    <FakeApp/>
      {/* <SabraContext>
        <Button/>
        <FunctionContextComponent />
      </SabraContext> */}
    </div>
  );
}

export default App;
