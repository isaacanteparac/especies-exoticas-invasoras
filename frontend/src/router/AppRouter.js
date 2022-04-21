import React from "react";
import NoAuthRouter from "./NoAuthRouter";
import YesAuthRouter from "./YesAuthRouter";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../components/layout/Navigation";


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
                <Navigation/>
              </PrivateRouter>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
