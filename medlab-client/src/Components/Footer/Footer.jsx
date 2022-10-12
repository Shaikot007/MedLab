import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import FooterLogo from '../../Images/Footer/footer_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="Footer">
      <div className="TopLine">
      </div>
      <div className="AppointmentSection">
        <img src={FooterLogo} alt="FooterLogo" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eligendi recusandae? Odit, dolor amet impedit sequi aliquid earum harum exercitationem sit assumenda minima asperiores quisquam deleniti suscipit et rem odio.</p>
        <h4>
          Make Appointment
          <FontAwesomeIcon icon={faArrowRight} size="lg" className="Arrow" />
        </h4>
      </div>
      <div className="DepartmentSection">
        <h4>Department</h4>
        <h6>Neurology Clinic</h6>
        <h6>Cardiology Clinic</h6>
        <h6>Pathology Clinic</h6>
        <h6>Cardiac Clinic</h6>
        <h6>Laboratory Analysis</h6>
      </div>
      <div className="LinksSection">
        <h4>Links</h4>
        <h6>About Us</h6>
        <h6>Our Clinic</h6>
        <h6>Our Doctors</h6>
        <h6>News & Media</h6>
        <h6>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</Link>
        </h6>
      </div>
      <div className="ContactSection">
        <h4 style={{ color: 'black' }}>Quick Contact</h4>
        <p style={{ color: 'grey' }}>If you have any questions or need help, fell free contact with our team.</p>
        <h6 style={{ color: 'grey' }}>
          <FontAwesomeIcon icon={faPhone} size="lg" className="Phone" />
          01061245741
        </h6>
        <p style={{ color: 'grey' }}>2307 Beverley Rd Brooklyn, New York 11226, United States</p>
        <h4 style={{ color: 'grey' }}>
          <FontAwesomeIcon icon={faArrowRight} size="lg" className="Arrow" />
          Get Directions
        </h4>
      </div>
    </div>
  );
}

export default Footer;
