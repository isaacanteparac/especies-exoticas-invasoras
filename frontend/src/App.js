import "./App.css";
import NoAuthRouter from "./router/NoAuthRouter";
import YesAuthRouter from "./router/YesAuthRouter";
import PublicRouter from "./router/PublicRouter";
import PrivateRouter from "../src/router/PrivateRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
                  <NoAuthRouter />
                </PublicRouter>
              }
            />

            <Route
              path="/*"
              element={
                <PrivateRouter>
                  <YesAuthRouter />
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
