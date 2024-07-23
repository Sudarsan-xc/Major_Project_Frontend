import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import ManufacturerPage from "./components/pages/ManufacturerPage";
import HomePage from "./components/home/HomePage";
import AddProductPage from "./components/pages/AddProductPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/manufacturer" element={<ManufacturerPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
