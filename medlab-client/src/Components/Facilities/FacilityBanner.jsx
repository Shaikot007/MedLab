import React from "react";
import './FacilityBanner.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Img_1 from '../../Images/Facility/facility_1.jpg';
import Img_2 from '../../Images/Facility/facility_2.jpg';
import Img_3 from '../../Images/Facility/facility_3.jpg';

class FacilityBanner extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div className="Item">
          <img src={Img_1} alt="Facilities" />
          <h6>Accurate Reports</h6>
          <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
        </div>
        <div className="Item">
          <img src={Img_2} alt="Facilities" />
          <h6>Affordable Pricing</h6>
          <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
        </div>
        <div className="Item">
          <img src={Img_3} alt="Facilities" />
          <h6>Convenience</h6>
          <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
        </div>
      </OwlCarousel>
    );
  }
}

export default FacilityBanner;
