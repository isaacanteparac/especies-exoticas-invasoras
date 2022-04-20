import "./App.css";
import AppRouter from "./router/AppRouter";
import {Context} from "./auth/Context";

function App() {
  return (
    <div className="App">
      <Context>
        <AppRouter/>
      </Context>
    </div>
  );
}

export default App;
