import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.add("close");
  }
  return (
    <Router>
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
            </Routes>
          </main>
          <footer>
              <div className="header"> © 2024 JadeSprout</div>
          </footer>
          </div>
        </body>
      </div>
    </Router>
  );
}

export default App;
