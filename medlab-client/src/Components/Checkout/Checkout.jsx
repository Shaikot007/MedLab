import React from 'react';
import './Checkout.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Bill from '../Checkout/Bill';
import CheckoutList from './CheckoutList';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

function Checkout() {
  return (
    <div>
      <NavBar />
      <h3 style={{ padding: '10% 0% 5% 0%' }}>Checkout</h3>
      <div className='CheckoutList'>
        <div className='BillBox'>
          <Bill />
        </div>
        <div className="OrderList">
          <h5>Order Review</h5>
          <CheckoutList />
          <Form style={{ width: '90%', textAlign: 'left' }}>
            <FormGroup tag="fieldset">
              <h5>Payment Methods</h5>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> American Express
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Master Card
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Cash on Delivery
                </Label>
              </FormGroup>
            </FormGroup>
          </Form>
          <div className='Proceed'>
            <h6>Total : $ 75.00</h6>
            <Button color='success'>Proceed</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
