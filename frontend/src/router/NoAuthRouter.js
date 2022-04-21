import React from "react";
import {Navigate, Route, Routes } from "react-router-dom";

import Login from "../components/registerUser/Login";
import Signup from "../components/registerUser/Signup";
import ViewAnimal from "../components/animal/ViewAnimal";

export default function NoAuthRouter() {
  return (
    <>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="view-animal" element={<ViewAnimal />} />
          <Route path="*" element={<Navigate to="/free/view-animal" />} />
        </Routes>
    </>
  );
}
