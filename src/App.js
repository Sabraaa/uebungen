import { createStore } from "redux";
import "./App.css";
import FakeApp from "./fakeApp";
import { Provider } from "react-redux";
import allReducers from "./reducers";
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div>
      <Provider store={store}>
        <FakeApp />
      </Provider>
    </div>
  );
}

export default App;
