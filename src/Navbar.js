import React from "react";
import { Link } from "react-router-dom";
import "../src/CSS/navbar.css";

function Navbar() {
  return (
    <>



    
      <nav className="navbar">
        <div >
          <Link to="/" className="text-decoration-none">
            <h1>Welcome To Doojo Blog</h1>
          </Link>
        </div>
        <div className="right">
          <input type="checkbox" id="check" />
          <label for="check" className="checkBtn">
            <i className="fa fa-bars"></i>
          </label>
          <ul className="list">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/create"> New Blog </Link>
            </li>
            <li>
              <Link to="/create"> About Us </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
