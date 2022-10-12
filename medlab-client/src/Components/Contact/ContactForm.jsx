import React from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

export default class ContactForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <h2>Contact us</h2>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="name" name="name" id="name" placeholder="Enter your name" style={{ width: '500px' }} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="Enter your email" style={{ width: '500px' }} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="text" sm={2}>Message</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="text" placeholder="Enter your message" style={{ height: '150px', width: '500px' }} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="file" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="file" style={{ width: '500px' }} />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button style={{ backgroundColor: '#10847e' }}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
