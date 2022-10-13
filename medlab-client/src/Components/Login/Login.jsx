import React from 'react';
import './Login.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LoginForm from './LoginForm';

function Login() {
  return (
    <div>
      <NavBar />
      <div className="Login">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
