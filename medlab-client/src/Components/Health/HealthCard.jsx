import React from 'react';
import './HealthCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle
} from 'reactstrap';
import {
  faEye,
  faBrain,
  faHeartbeat,
  faMicroscope,
  faDroplet,
  faFlask,
  faPills,
  faTeeth,
  faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

const HealthCard = () => {
  return (
    <div>
      <Row>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='HealthCard'>
            <CardBody>
              <FontAwesomeIcon icon={faBrain} size="lg" style={{ display: 'block', padding: '10px 10px 15px 10px', textAlign: 'left', color: 'darkred' }} />
              <CardTitle style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Psychiatry
              </CardTitle>
              <CardText style={{ color: 'grey', textAlign: 'justify' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href="#" className='HealthCardLink'>
                More <FontAwesomeIcon icon={faArrowAltCircleRight} size="sm" style={{ cursor: 'pointer' }} />
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='HealthCard'>
            <CardBody>
              <FontAwesomeIcon icon={faEye} size="lg" style={{ display: 'block', padding: '10px 10px 15px 10px', textAlign: 'left', color: 'darkred' }} />
              <CardTitle style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Opthalmology
              </CardTitle>
              <CardText style={{ color: 'grey', textAlign: 'justify' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href="#" className='HealthCardLink'>
                More <FontAwesomeIcon icon={faArrowAltCircleRight} size="sm" style={{ cursor: 'pointer' }} />
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='HealthCard'>
            <CardBody>
              <FontAwesomeIcon icon={faHeartbeat} size="lg" style={{ display: 'block', padding: '10px 10px 15px 10px', textAlign: 'left', color: 'darkred' }} />
              <CardTitle style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Cardiology
              </CardTitle>
              <CardText style={{ color: 'grey', textAlign: 'justify' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href="#" className='HealthCardLink'>
                More <FontAwesomeIcon icon={faArrowAltCircleRight} size="sm" style={{ cursor: 'pointer' }} />
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='HealthCard'>
            <CardBody>
              <FontAwesomeIcon icon={faMicroscope} size="lg" style={{ display: 'block', padding: '10px 10px 15px 10px', textAlign: 'left', color: 'darkred' }} />
              <CardTitle style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Immumnology
              </CardTitle>
              <CardText style={{ color: 'grey', textAlign: 'justify' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href="#" className='HealthCardLink'>
                More <FontAwesomeIcon icon={faArrowAltCircleRight} size="sm" style={{ cursor: 'pointer' }} />
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='HealthCard'>
            <CardBody>
              <FontAwesomeIcon icon={faDroplet} size="lg" style={{ display: 'block', padding: '10px 10px 15px 10px', textAlign: 'left', color: 'darkred' }} />
              <CardTitle style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Hematology
              </CardTitle>
              <CardText style={{ color: 'grey', textAlign: 'justify' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href="#" className='HealthCardLink'>
                More <FontAwesomeIcon icon={faArrowAltCircleRight} size="sm" style={{ cursor: 'pointer' }} />
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='HealthCard'>
            <CardBody>
              <FontAwesomeIcon icon={faFlask} size="lg" style={{ display: 'block', padding: '10px 10px 15px 10px', textAlign: 'left', color: 'darkred' }} />
              <CardTitle style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Laboratory
              </CardTitle>
              <CardText style={{ color: 'grey', textAlign: 'justify' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href="#" className='HealthCardLink'>
                More <FontAwesomeIcon icon={faArrowAltCircleRight} size="sm" style={{ cursor: 'pointer' }} />
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='HealthCard'>
            <CardBody>
              <FontAwesomeIcon icon={faPills} size="lg" style={{ display: 'block', padding: '10px 10px 15px 10px', textAlign: 'left', color: 'darkred' }} />
              <CardTitle style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Oncology
              </CardTitle>
              <CardText style={{ color: 'grey', textAlign: 'justify' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href="#" className='HealthCardLink'>
                More <FontAwesomeIcon icon={faArrowAltCircleRight} size="sm" style={{ cursor: 'pointer' }} />
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='HealthCard'>
            <CardBody>
              <FontAwesomeIcon icon={faTeeth} size="lg" style={{ display: 'block', padding: '10px 10px 15px 10px', textAlign: 'left', color: 'darkred' }} />
              <CardTitle style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Dental
              </CardTitle>
              <CardText style={{ color: 'grey', textAlign: 'justify' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href="#" className='HealthCardLink'>
                More <FontAwesomeIcon icon={faArrowAltCircleRight} size="sm" style={{ cursor: 'pointer' }} />
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HealthCard;
