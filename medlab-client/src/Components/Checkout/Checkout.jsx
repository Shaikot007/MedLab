import React from 'react';
import './Checkout.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import CheckoutList from './CheckoutList';
import { Button } from 'reactstrap';

function Checkout() {
  return (
    <div>
      <NavBar />
      <div className="CheckoutList">
        <h3>Checkout</h3>
        <CheckoutList />
        <div className='Proceed'>
          <h6>Total : $ 75.00</h6>
          <Button color='success'>Proceed</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
