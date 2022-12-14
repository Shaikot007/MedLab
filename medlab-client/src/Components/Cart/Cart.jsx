import React from 'react';
import './Cart.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import CartItem from './CartItem';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

function Cart() {
  return (
    <div>
      <NavBar />
      <div className="Cart">
        <h3>Lab Tests Cart</h3>
        <CartItem />
        <div className='Checkout'>
          <h6>Total : $ 75.00</h6>
          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <Button color='success'>Checkout</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
