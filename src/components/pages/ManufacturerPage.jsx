import React from "react";
import { useNavigate } from "react-router-dom";
import "./ManufacturerPage.css";

function ManufacturerPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  return (
    <div className="manufacturer-container">
      <div className="manufacturer-box">
        <div className="header">
          <span>Welcome:</span>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <h2>Manufacturer</h2>
        <div className="buttons">
          <button>Check Profile</button>
          <button onClick={handleAddProduct}>Add Product</button>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}

export default ManufacturerPage;
