import React from 'react';
import './Contact.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="Contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
