import React from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <h2>Sign in</h2>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="Enter your email" style={{ width: '500px' }} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="password" placeholder="Enter your password" style={{ width: '500px' }} />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button style={{ width: '250px', backgroundColor: '#10847e' }}>Login</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
