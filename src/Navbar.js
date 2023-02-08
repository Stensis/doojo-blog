import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2 className="mb-3">The Doojo Blog</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">New Blog + </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
