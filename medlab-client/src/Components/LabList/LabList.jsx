import React from "react";
import './LabList.css';
import NavBar from '../NavBar/NavBar';
import Facility from '../Facilities/Facilities';
import Footer from '../Footer/Footer';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import LabImg from '../../Images/Lab/lab.png';
import {
  faDiagnoses,
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
            <div className="LabCard">
              <div className="LabCardDetail">
                <div className="LabName">
                  <FontAwesomeIcon icon={faDiagnoses} size='lg' style={{ padding: '15px 5px 15px 5px', color: '10847e' }} />
                  <h5>PharmEasy Labs</h5>
                </div>
                <div className="LabName">
                  <div className="BlankBox">
                  </div>
                  <p style={{ color: 'grey' }}>
                    <FontAwesomeIcon icon={faCertificate} size='sm' /> NABL, CAP Certified
                  </p>
                </div>
                <div className="LabName">
                  <div className="BlankBox">
                  </div>
                  <p style={{ color: 'grey' }}>
                    <FontAwesomeIcon icon={faLocationPin} size='sm' /> Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="LabCardButton">
                <FontAwesomeIcon icon={faArrowRight} size='lg' className="LeftArrow" />
              </div>
            </div>

            <div className="LabCard">
              <div className="LabCardDetail">
                <div className="LabName">
                  <FontAwesomeIcon icon={faDiagnoses} size='lg' style={{ padding: '15px 5px 15px 5px', color: '10847e' }} />
                  <h5>PharmEasy Labs</h5>
                </div>
                <div className="LabName">
                  <div className="BlankBox">
                  </div>
                  <p style={{ color: 'grey' }}>
                    <FontAwesomeIcon icon={faCertificate} size='sm' /> NABL, CAP Certified
                  </p>
                </div>
                <div className="LabName">
                  <div className="BlankBox">
                  </div>
                  <p style={{ color: 'grey' }}>
                    <FontAwesomeIcon icon={faLocationPin} size='sm' /> Chottogram, Bangladesh
                  </p>
                </div>
              </div>
              <div className="LabCardButton">
                <FontAwesomeIcon icon={faArrowRight} size='lg' className="LeftArrow" />
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
