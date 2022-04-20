import React from "react";
import NoAuthRouter from "./NoAuthRouter";
import YesAuthRouter from "./YesAuthRouter";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function AppRouter() {
  return (
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
  );
}
