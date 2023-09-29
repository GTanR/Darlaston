import React from 'react';
import { Link } from 'react-router-dom';
import './allproducts.css';

function AllProductsPage() {
  return (
    <div>
      <div className='bar'>
        <div className='searchBar'>
          <i className="fa fa-search searchIcon"></i>
          <input
            type="text"
            placeholder="Search"
            className="searchInput"
          />
          <div className='user'>
            <img src="./assets/images/user.jpg" alt="User" className="userPhoto" />
            <button className="loginButton">Login</button>
          </div>
          <div className='cart'>
            <i className="fa fa-shopping-cart cartIcon" style={{ fontSize: '24px', color:'DodgerBlue' }}></i>
            <span className="cartCount">3</span>
          </div>
        </div>
      </div>
      <div className='allproducts'>
        <div id="header">
          <Link id="back" to="/customers">&larr;</Link>
          <h4>All Products</h4>
        </div>
        <div className='list'>
          <div className='products'>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
              <p>Product 4</p>
              <p>Product 5</p>
          </div>
        </div>
        <div className='list'>
          <div className='products'>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
              <p>Product 4</p>
              <p>Product 5</p>
          </div>
        </div>
        <div className='list'>
          <div className='products'>
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
              <p>Product 4</p>
              <p>Product 5</p>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='storeDetails'>
          <h5>Store Name</h5>
          <p>Address: 1234 Store Street, City, Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@store.com</p>
        </div>
        <div className='timings'>
            <p>MON-FRI: 7am - 10pm</p>
            <p>SATURDAY: 8am - 10pm</p>
            <p>SUNDAY: 8am - 11pm</p>
            <p>FAQ/ Shpping & Returns /<br/> Store Policy <br/>/Payment Methods</p>
        </div>
        <div className='socialMedia'>
            <p>Follow us on Social Media</p>
        </div>
        <div className='subscribe'>
          <h5>Subscribe to our Newsletter</h5>
          <p>Stay updated with our latest offers and products.</p>
          <div className='subscribeForm'>
            <input type="email" placeholder="Enter your email" className="subscribeInput" />
            <button className="subscribeButton">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AllProductsPage;
