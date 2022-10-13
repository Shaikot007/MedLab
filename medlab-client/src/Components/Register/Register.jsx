import React from 'react';
import './Register.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import RegisterForm from './RegisterForm';

function Register() {
  return (
    <div>
      <NavBar />
      <div className="Register">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
}

export default Register;
