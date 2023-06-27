import React from "react";
import resortData from "../data/ResortData";
import '../styles/Resorts.css';

const Resorts = () => {
  return (
    <div className="resorts-container">
      <h1 className="resorts-heading">Honeymoon Resorts</h1>
      <div className="resorts-grid">
        {resortData.map((resort) => (
          <div key={resort.id} className="resort-item">
            <img src={resort.image} alt={resort.name} className="resort-image" />
            <h2 className="resort-name">{resort.name}</h2>
            <p className="resort-description">{resort.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resorts;

