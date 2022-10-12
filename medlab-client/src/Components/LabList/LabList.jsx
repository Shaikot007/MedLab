import React from "react";
import './LabList.css';
import NavBar from '../NavBar/NavBar';
import Facility from '../Facilities/Facilities';
import Footer from '../Footer/Footer';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LabImg from '../../Images/Lab/lab.png';
import {
  faCertificate,
  faLocationPin,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

function LabList() {
  return (
    <div>
      <NavBar />
      <div className="LabList">
        <div className="LabListBox">
          <div className="LabNameList">
            <div className="LabListBoxTitle">
              <h4>Certified Labs</h4>
              <h5>2 Tests</h5>
            </div>
            <div className="LabNameHeadline">
              <FontAwesomeIcon icon={faCertificate} size='sm' style={{ color: 'orange' }} />
              <span style={{ paddingLeft: '5px' }}>Reliabilty assured with Certified Labs</span>
            </div>
            <div className="LabCard">
              <div className="BlankBox">
                <img src={LabImg} alt="LabImage" style={{ height: 'auto', width: '100%' }} />
              </div>
              <div className="LabCardDetail">
                <div className="LabName">
                  <h5>PharmEasy Labs</h5>
                  <FontAwesomeIcon icon={faArrowRight} size='lg' className="LeftArrow" style={{ color: '#10847e' }} />
                </div>
                <div className="LabName">
                  <p style={{ color: 'grey', paddingLeft: '10px' }}>
                    <FontAwesomeIcon icon={faCertificate} size='sm' /> NABL, CAP Certified
                  </p>
                </div>
                <div className="LabName">
                  <p style={{ color: 'grey', paddingLeft: '10px' }}>
                    <FontAwesomeIcon icon={faLocationPin} size='sm' /> Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div className="LabCard">
              <div className="BlankBox">
                <img src={LabImg} alt="LabImage" style={{ height: 'auto', width: '100%' }} />
              </div>
              <div className="LabCardDetail">
                <div className="LabName">
                  <h5>PharmEasy Labs</h5>
                  <FontAwesomeIcon icon={faArrowRight} size='lg' className="LeftArrow" style={{ color: '#10847e' }} />
                </div>
                <div className="LabName">
                  <p style={{ color: 'grey', paddingLeft: '10px' }}>
                    <FontAwesomeIcon icon={faCertificate} size='sm' /> NABL, CAP Certified
                  </p>
                </div>
                <div className="LabName">
                  <p style={{ color: 'grey', paddingLeft: '10px' }}>
                    <FontAwesomeIcon icon={faLocationPin} size='sm' /> Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CartBox">
          <h6>Order Summary</h6>
          <p>Please select a test to proceed</p>
          <Button>View Cart</Button>
        </div>
      </div>
      <Facility />
      <Footer />
    </div>
  );
}

export default LabList;
