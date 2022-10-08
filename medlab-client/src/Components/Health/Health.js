import React from "react";
import './Health.css';
import HealthCard from './Card';

function Health() {
  return (
    <div className="Health">
      <div className="HealthTitle">
        <h3>Best Solution For Your Health</h3>
      </div>
      <div className="HealthCard">
        <HealthCard />
      </div>
    </div>
  );
}

export default Health;
