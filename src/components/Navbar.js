import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Cloud Monitor</h2>
      <ul>
        <li><a href="upload">Upload</a></li>
        <li><a href="threats">Threats</a></li>
        <li><a href="dashboard">Dashboard</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
