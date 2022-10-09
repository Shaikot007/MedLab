import React from "react";
import './Features.css';
import FeaturedCard from './FeaturedCard';

function Features() {
  return (
    <div className="Features">
      <div className="TopBox">
        <h4>Featured Labs</h4>
        <h6 style={{ color: 'darkred', cursor: 'pointer' }}>VIEW ALL</h6>
      </div>
      <div className="BottomBox">
        <FeaturedCard />
      </div>
    </div>
  );
}

export default Features;
