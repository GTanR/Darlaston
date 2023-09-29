import React from 'react';
import './about.css'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function AboutPage() {
  return (
    <div className="about-page">
      <div id="header">
        <Link id="back" to="/customers">&larr;</Link>
        <h5>About Us</h5>
      </div>
      <p>
        Welcome to our store! We are passionate about providing high-quality products and exceptional customer service.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla.
      </p>
      <p>
        We take pride in offering a wide range of products that cater to your needs. Our mission is to make your shopping experience enjoyable and convenient.
      </p>
      <p>
        Thank you for choosing us as your preferred shopping destination. We look forward to serving you.
      </p>
    </div>
  );
}

export default AboutPage;
