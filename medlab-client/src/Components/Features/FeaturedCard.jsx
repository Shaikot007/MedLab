import React from 'react';
import './FeaturedCard.css';
import Lab_1 from '../../Images/Featured_labs/lab_1.jpg';
import Lab_2 from '../../Images/Featured_labs/lab_2.jpg';
import Lab_3 from '../../Images/Featured_labs/lab_3.jpg';
import Lab_4 from '../../Images/Featured_labs/lab_4.jpg';
import { Card,
  CardImg,
  CardText,
  Row,
  Col
} from 'reactstrap';

const FeaturedCard = () => {
  return (
    <div>
      <Row>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='FeaturedCard'>
            <CardImg src={Lab_1} alt="logo" style={{ marginTop: '10px', height: '25px', width: '75px' }} />
            <CardText style={{ padding: '25px 0px 25px 0px', textAlign: 'justify' }}>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='FeaturedCard'>
            <CardImg src={Lab_2} alt="logo" style={{ marginTop: '10px', height: '25px', width: '75px' }} />
            <CardText style={{ padding: '25px 0px 25px 0px', textAlign: 'justify' }}>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='FeaturedCard'>
            <CardImg src={Lab_3} alt="logo" style={{ marginTop: '10px', height: '25px', width: '75px' }} />
            <CardText style={{ padding: '25px 0px 25px 0px', textAlign: 'justify' }}>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
          </Card>
        </Col>
        <Col sm="3" style={{ padding: '0px' }}>
          <Card className='FeaturedCard'>
            <CardImg src={Lab_4} alt="logo" style={{ marginTop: '10px', height: '25px', width: '75px' }} />
            <CardText style={{ padding: '25px 0px 25px 0px', textAlign: 'justify' }}>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedCard;
