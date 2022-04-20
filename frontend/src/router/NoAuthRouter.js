import React from "react";
import {Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../components/layout/Navigation";

import Login from "../components/registerUser/Login";
import Signup from "../components/registerUser/Signup";
import IndexViewAnimal from "../components/viewAnimal/index.viewAnimal";

export default function NoAuthRouter() {
  return (
    <>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="view-animal" element={<Navigation><IndexViewAnimal /></Navigation>} />
          
          <Route path="*" element={<Navigate to="/free/view-animal" />} />
        </Routes>
     
    </>
  );
}
