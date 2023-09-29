import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ContactPage() {
  return (
    <div className="contact-page">
      <div id="header">
        <Link id="back" to="/customers">&larr;</Link>
        <h5>Contact Us</h5>
      </div>
      <p>If you have any questions or feedback, please feel free to contact us using the information below:</p>
      <div className="contact-details">
        <p>Email: <a href="mailto:info@store.com">info@store.com</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 1234 Store Street, City, Country</p>
      </div>
      <div className="contact-form">
        <h4>Send us a message:</h4>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
