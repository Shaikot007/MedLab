import React from "react";
import './TestList.css';
import NavBar from '../NavBar/NavBar';
import Facility from '../Facilities/Facilities';
import Footer from '../Footer/Footer';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

function TestList() {
  return (
    <div>
      <NavBar />
      <div className="TestList">
        <div className="TestListBox">
          <div className="TestNameList">
            <div className="TestListBoxTitle">
              <h4>Lab Tests</h4>
              <h5>10 Tests</h5>
            </div>
            <div className="TestCard">
              <div className="TestCardDetail">
                <div className="TestName">
                  <FontAwesomeIcon icon={faFlask} size='lg' style={{ padding: '15px 10px 15px 10px', color: '10847e' }} />
                  <h6>Complete Blood Count / Hemogram</h6>
                </div>
                <div className="TestName">
                  <div className="TestBlankBox">
                  </div>
                  <h6>$ 275.00 <span style={{ color: 'grey' }}>onward</span> </h6>
                </div>
              </div>
              <div className="TestCardButton">
                <Button>Select</Button>
              </div>
            </div>
            <div className="TestCard">
              <div className="TestCardDetail">
                <div className="TestName">
                  <FontAwesomeIcon icon={faFlask} size='lg' style={{ padding: '15px 10px 15px 10px', color: '10847e' }} />
                  <h6>Complete Blood Count / Hemogram</h6>
                </div>
                <div className="TestName">
                  <div className="TestBlankBox">
                  </div>
                  <h6>$ 275.00 <span style={{ color: 'grey' }}>onward</span> </h6>
                </div>
              </div>
              <div className="TestCardButton">
                <Button>Select</Button>
              </div>
            </div>
            <div className="TestCard">
              <div className="TestCardDetail">
                <div className="TestName">
                  <FontAwesomeIcon icon={faFlask} size='lg' style={{ padding: '15px 10px 15px 10px', color: '10847e' }} />
                  <h6>Complete Blood Count / Hemogram</h6>
                </div>
                <div className="TestName">
                  <div className="TestBlankBox">
                  </div>
                  <h6>$ 275.00 <span style={{ color: 'grey' }}>onward</span> </h6>
                </div>
              </div>
              <div className="TestCardButton">
                <Button>Select</Button>
              </div>
            </div>
            <div className="TestCard">
              <div className="TestCardDetail">
                <div className="TestName">
                  <FontAwesomeIcon icon={faFlask} size='lg' style={{ padding: '15px 10px 15px 10px', color: '10847e' }} />
                  <h6>Complete Blood Count / Hemogram</h6>
                </div>
                <div className="TestName">
                  <div className="TestBlankBox">
                  </div>
                  <h6>$ 275.00 <span style={{ color: 'grey' }}>onward</span> </h6>
                </div>
              </div>
              <div className="TestCardButton">
                <Button>Select</Button>
              </div>
            </div>
            <div className="TestCard">
              <div className="TestCardDetail">
                <div className="TestName">
                  <FontAwesomeIcon icon={faFlask} size='lg' style={{ padding: '15px 10px 15px 10px', color: '10847e' }} />
                  <h6>Complete Blood Count / Hemogram</h6>
                </div>
                <div className="TestName">
                  <div className="TestBlankBox">
                  </div>
                  <h6>$ 275.00 <span style={{ color: 'grey' }}>onward</span> </h6>
                </div>
              </div>
              <div className="TestCardButton">
                <Button>Select</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="TestCartBox">
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

export default TestList;
