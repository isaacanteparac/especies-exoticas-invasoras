import React from "react";
import {Navigate, Route, Routes } from "react-router-dom";

import Login from "../../components/registerUser/Login";
import Signup from "../../components/registerUser/Signup";
import IndexViewAnimal from "../../components/viewAnimal/index.viewAnimal";

export default function NoAuthRouter() {
  return (
    <>
      
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="animal" element={<IndexViewAnimal />} />
          
          
        </Routes>
     
    </>
  );
}
