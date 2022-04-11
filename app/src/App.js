import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/registerUser/Login";
import Signup from "./components/registerUser/Signup";
import RegisterAnimal from "./components/registerAnimal/RegisterAnimal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register-animal" element={<RegisterAnimal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
