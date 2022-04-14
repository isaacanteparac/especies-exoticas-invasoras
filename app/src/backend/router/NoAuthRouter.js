import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../../components/registerUser/Login";
import Signup from "../../components/registerUser/Signup";
import IndexViewAnimal from "../../components/viewAnimal/index.viewAnimal";

export default function NoAuth() {
  return (
    <>
      
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<IndexViewAnimal />} />
        </Routes>
     
    </>
  );
}
