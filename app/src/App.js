import "./App.css";
import NoAuth from "./backend/router/NoAuthRouter";
import PublicRouter from "./backend/router/PublicRouter";
import {PrivateRouter} from "../src/backend/router/PrivateRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAnimal from "./components/registerAnimal/RegisterAnimal";
import {Context} from "./auth/Context";

function App() {
  return (
    <div className="App">
      <Context>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/free/*"
              element={
                <PublicRouter>
                  <NoAuth />
                </PublicRouter>
              }
            />

            <Route
              path="/*"
              element={
                <PrivateRouter>
                  <RegisterAnimal />
                </PrivateRouter>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      </Context>
      
    </div>
  );
}

export default App;
