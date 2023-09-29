import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import OrdersPage from './screens/Orders/OrdersPage';
import ProductsPage from './screens/Products/ProductsPage';
import AddProductPage from './screens/Products/AddProductPage';
import CustomersPage from './screens/Customers/CustomersPage';
import AllProductsPage from './screens/Customers/AllProductsPage';
import AboutPage from './screens/Customers/AboutPage';
import ContactPage from './screens/Customers/ContactPage';

function App() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="#">☰</a>
                        <ul className="dropdown">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/orders">Orders</Link></li>
                            <li><Link to="/customers">Customers</Link></li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/ratings">Ratings</Link></li>
                        </ul>
                    </li>
                </ul>

                <h4>Your Store Name</h4>

                <div className="user-info">
                    <img src = "./assets/images/user.jpg" alt=""/>
                    <span>Welcome, Username</span>
                </div>
            </nav>

            <Switch>
                <Route path = "/orders" component = {OrdersPage} />
                <Route path = "/products" component = {ProductsPage} />
                <Route exact path = "/addproduct" component={AddProductPage} />
                <Route path = "/customers" component = {CustomersPage}/>
                <Route path = "/shop" component = {AllProductsPage}/>
                <Route path = "/about" component = {AboutPage}/>
                <Route path="/contact" exact component={ContactPage} />
                    <Route path="/" exact>
                        <section id = "firsthalf">
                            <section id="contents">
                                <section id="revenue">
                                    <h3 className="symbol">$</h3>
                                    <h6 className="amount">Monthly Revenue<br></br>$ 45000</h6>
                                </section>
                                <section id="orders">
                                    <img className="symbol" src="./assets/images/cart.png" alt=""/>
                                    <h6 className="quantity">New Orders<br></br> 20</h6>
                                </section>
                                <section id="reviews">
                                    <img className="symbol" src="./assets/images/review.png" alt=""/>
                                    <h6 className="pending">Pending Reviews<br></br>20</h6>
                                </section>
                                <section id="customers">
                                    <img className="symbol" src="./assets/images/customer.png" alt=""/>
                                    <h6 className="quantity">New Customers <br></br>15 </h6>
                                </section>
                            </section>

                            <section id = "secondhalf">
                                <section id="history">
                                    <p>30 Days Revenue History</p>
                                </section>
                                <section id="penord">
                                    <p>Pending Orders</p>
                                </section>
                            </section>
                        </section>
                    </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
