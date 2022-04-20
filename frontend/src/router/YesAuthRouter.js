import React from "react";
import {Navigate, Route, Routes } from "react-router-dom";
import RegisterAnimal from "../components/registerAnimal/RegisterAnimal";


export default function YesAuthRouter() {
  return (
    <>
        <Routes>

          <Route path="register" element={<RegisterAnimal />} />
          
          <Route path="*" element={<Navigate to="/register" />} />
        </Routes>
     
    </>
  );
}
