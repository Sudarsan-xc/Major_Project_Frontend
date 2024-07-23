import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h3>
          <strong>Your Safety Our Concern</strong>
        </h3>

        <span>Secure Products Using Blockchain</span>

        <button onClick={handleLoginClick}>Login</button>
      </header>
      <div className="home-content">
        <h2>Welcome to Supply Chain Management System.</h2>
        <p>
          <strong>Securely</strong> buy / sell your consumer goods and stay{" "}
          <strong>safe</strong> against frauds
        </p>
        <p>To get started, Scan QR on your product!</p>
        <button className="scan-qr-button">Scan QR</button>
      </div>
      <div className="home-image">
        <img src="/src/assets/Home.png" alt="Global Logistics" />
      </div>
    </div>
  );
}

export default HomePage;
