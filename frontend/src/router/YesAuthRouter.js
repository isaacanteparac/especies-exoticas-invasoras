import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterAnimal from "../components/registerAnimal/RegisterAnimal";
import Navigation from "../components/layout/Navigation";
import ContentComponent from "../components/layout/ContentComponent";
import Home from "../components/home/Home";

export default function YesAuthRouter() {
  return (
    <Navigation>
       <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<RegisterAnimal/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Navigation>
     
  );
}
