import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

export default class Bill extends React.Component {
  render() {
    return (
      <Form style={{ width: '90%' }}>
        <FormGroup>
          <h5>Billing info</h5>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter your name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter your password" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="textarea" name="address" id="address" placeholder="Enter your address" />
        </FormGroup>
      </Form>
    );
  }
}
