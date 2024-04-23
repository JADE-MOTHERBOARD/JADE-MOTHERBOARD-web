import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from './Orders/Orders'
import OrderDetail from './Orders/OrderDetail';
import PaymentScreen from "./Payment/Payment"
import Fulfillments from './Fulfillment/Fulfillments';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router>
      <div className = "App">
        <div className = "grid-container">
            <link rel="stylesheet" href="style.css" />
            <title>JadeSprout</title>

        <body>
            <div>
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}>☰</button>
                        <a href="index.html">JadeSprout</a>
                    </div>

                    <div className="header-links">
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="payment">Payment</Link>
                        <Link to="fulfillments">Fulfillments</Link>
                    </div>
                </header>
                
                <aside className="sidebar">
                    <h3>Shopping Categories</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    <ul>
                        <li>
                            <a href="index.html">Pants</a>
                        </li>
                        <li>
                            <a href="index.html">Shirts</a>
                        </li>
                    </ul>
                </aside>
          <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Products />} />
                <Route path="orders" element={<Orders />}></Route>
                <Route path="/order/:id" element={<OrderDetail />}></Route>
                <Route path="payment" element={<PaymentScreen />}></Route>
                <Route path="fulfillments" element={<Fulfillments />}></Route>
            </Routes>
          </main>
          <footer>
              <div className="header"> © 2024 JadeSprout</div>
          </footer>
          </div>
        </body>
      </div>
    </div>
  </Router>
  );
}

export default App;
