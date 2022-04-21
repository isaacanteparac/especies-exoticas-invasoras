import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import Home from "../components/home/Home";

export default function YesAuthRouter() {
  return (
    <Navigation>
       <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Navigation>
     
  );
}
