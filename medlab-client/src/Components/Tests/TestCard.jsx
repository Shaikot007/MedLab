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
  faHospital,
  faWheelchair,
  faHeadSideCough,
  faUsers,
  faPersonPregnant
} from '@fortawesome/free-solid-svg-icons';

const TestCard = () => {
  return (
    <div>
      <Row>
        <Col sm="3" style={{ height: 'auto' }}>
          <Card body style={{ border: '1px solid white', height: '150px', width: '120px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faUser} style={{ padding: '15px 10px 15px 10px', color: 'tomato', fontSize: '30px' }} />
            <CardTitle style={{ paddingTop: '35px', fontWeight: 'bold', color: 'navy' }}>Personal</CardTitle>
          </Card>
        </Col>
        <Col sm="3" style={{ height: 'auto' }}>
          <Card body style={{ border: '1px solid white', height: '150px', width: '120px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faHeartbeat} style={{ padding: '15px 10px 15px 10px', color: 'tomato', fontSize: '30px' }} />
            <CardTitle style={{ paddingTop: '35px', fontWeight: 'bold', color: 'navy' }}>Health</CardTitle>
          </Card>
        </Col>
        <Col sm="3" style={{ height: 'auto' }}>
          <Card body style={{ border: '1px solid white', height: '150px', width: '120px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faBaby} style={{ padding: '15px 10px 15px 10px', color: 'tomato', fontSize: '30px' }} />
            <CardTitle style={{ paddingTop: '35px', fontWeight: 'bold', color: 'navy' }}>Children</CardTitle>
          </Card>
        </Col>
        <Col sm="3" style={{ height: 'auto' }}>
          <Card body style={{ border: '1px solid white', height: '150px', width: '120px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faHospital} style={{ padding: '15px 10px 15px 10px', color: 'tomato', fontSize: '30px' }} />
            <CardTitle style={{ paddingTop: '35px', fontWeight: 'bold', color: 'navy' }}>Disease</CardTitle>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col sm="3" style={{ height: 'auto' }}>
          <Card body style={{ border: '1px solid white', height: '150px', width: '120px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faWheelchair} style={{ padding: '15px 10px 15px 10px', color: 'tomato', fontSize: '30px' }} />
            <CardTitle style={{ paddingTop: '35px', fontWeight: 'bold', color: 'navy' }}>Old</CardTitle>
          </Card>
        </Col>
        <Col sm="3" style={{ height: 'auto' }}>
          <Card body style={{ border: '1px solid white', height: '150px', width: '120px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faHeadSideCough} style={{ padding: '15px 10px 15px 10px', color: 'tomato', fontSize: '30px' }} />
            <CardTitle style={{ paddingTop: '35px', fontWeight: 'bold', color: 'navy' }}>Fever</CardTitle>
          </Card>
        </Col>
        <Col sm="3" style={{ height: 'auto' }}>
          <Card body style={{ border: '1px solid white', height: '150px', width: '120px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faUsers} style={{ padding: '15px 10px 15px 10px', color: 'tomato', fontSize: '30px' }} />
            <CardTitle style={{ paddingTop: '35px', fontWeight: 'bold', color: 'navy' }}>Family</CardTitle>
          </Card>
        </Col>
        <Col sm="3" style={{ height: 'auto' }}>
          <Card body style={{ border: '1px solid white', height: '150px', width: '120px', borderRadius: '25px' }}>
            <FontAwesomeIcon icon={faPersonPregnant} style={{ padding: '15px 10px 15px 10px', color: 'tomato', fontSize: '30px' }} />
            <CardTitle style={{ paddingTop: '35px', fontWeight: 'bold', color: 'navy' }}>Pregnancy</CardTitle>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TestCard;
