import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardTitle,
  Row,
  Col
} from 'reactstrap';
import {
  faUser,
  faHeartbeat,
  faBaby,
  faHospital
} from '@fortawesome/free-solid-svg-icons';

const TestCard = () => {
  return (
    <div>
      <Row>
        <Col sm="3">
          <Card body style={{ width: '100px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faUser} size="lg" style={{ color: 'red', padding: '10px 10px 15px 10px' }} />
            <CardTitle style={{ fontWeight: 'bold', color: 'navy' }}>Personal</CardTitle>
          </Card>
        </Col>
        <Col sm="3">
          <Card body style={{ width: '100px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faHeartbeat} size="lg" style={{ color: 'red', padding: '10px 10px 15px 10px' }} />
            <CardTitle style={{ fontWeight: 'bold', color: 'navy' }}>Health</CardTitle>
          </Card>
        </Col>
        <Col sm="3">
          <Card body style={{ width: '100px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faBaby} size="lg" style={{ color: 'red', padding: '10px 10px 15px 10px' }} />
            <CardTitle style={{ fontWeight: 'bold', color: 'navy' }}>Children</CardTitle>
          </Card>
        </Col>
        <Col sm="3">
          <Card body style={{ width: '100px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faHospital} size="lg" style={{ color: 'red', padding: '10px 10px 15px 10px' }} />
            <CardTitle style={{ fontWeight: 'bold', color: 'navy' }}>Disease</CardTitle>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TestCard;
