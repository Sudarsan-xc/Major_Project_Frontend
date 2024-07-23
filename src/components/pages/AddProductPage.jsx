import React from "react";
import "./AddProductPage.css";

function AddProductPage() {
  return (
    <div className="add-product-container">
      <div className="add-product-box">
        <div className="header"></div>
        <h2>Add Product</h2>
        <form>
          <label>
            Serial no.
            <input type="text" value="28M3MXXZ998" readOnly />
          </label>
          <label>
            Name
            <input type="text" value="Tibetan Rug" readOnly />
          </label>
          <label>
            Description
            <textarea
              value="Size: 200x300 , Fine Nepali Wool, 100 knots, 4mm thick"
              readOnly
            />
          </label>
          <label>
            Batch no.
            <input type="text" value="PHIL9912" readOnly />
          </label>
          <button type="button" className="upload-button">
            Upload Image
          </button>
          <button type="submit" className="add-button">
            Add Product
          </button>
          <button type="button" className="back-button">
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProductPage;
