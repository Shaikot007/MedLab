import React from "react";
import './Tests.css';
import TestsCard from './Card';

function Tests() {
  return (
    <div className="Tests">
      <div className="LeftBox">
        <h3>We provide quality care that treats everyone</h3>
        <p>We provide primary care when you need it, get personalized and high quality healthcare by talking to top medical doctors.</p>
        <TestsCard />
      </div>
      <div className="RightBox">
      </div>
    </div>
  );
}

export default Tests;
