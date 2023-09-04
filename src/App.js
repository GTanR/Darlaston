import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <nav>
        <ul>
            <li>
                <a href="#">☰</a>
                <ul className="dropdown">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#orders">Orders</a></li>
                    <li><a href="#customers">Customers</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#ratings">Ratings</a></li>
                </ul>
            </li>
        </ul>

        <h3>Your Store Name</h3>

        <div className="user-info">
            <img src = "./assets/images/user.jpg" alt=""/>
            <span>Welcome, Username</span>
        </div>
    </nav>

    <section id="contents">
        <section id="revenue">
            <h3 className="symbol">$</h3>
            <h3 className="amount">Monthly Revenue<br></br>$ 45000</h3>
        </section>
        <section id="orders">
            <img className="symbol" src="./assets/images/cart.png" alt=""/>
            <h3 className="quantity">New Orders<br></br> 20</h3>
        </section>
        <section id="reviews">
            <img className="symbol" src="./assets/images/review.png" alt=""/>
            <h3 className="pending">Pending Reviews<br></br>20</h3>
        </section>
        <section id="customers">
            <img className="symbol" src="./assets/images/customer.png" alt=""/>
            <h3 className="quantity">New Customers <br></br>15 </h3>
        </section>
    </section>

    <section id="history">
        <p>30 Days Revenue History</p>
    </section>

    <section id="penord">
        <p>Pending Orders</p>
    </section>

  </div>
  );
}

export default App;
