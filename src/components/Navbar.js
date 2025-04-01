import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      
      <a href="/"><h2>RTSMTD</h2></a>
      <ul>
        <li><a href="upload">Upload</a></li>
        <li><a href="threats">Threats</a></li>
        <li><a href="dashboard">Dashboard</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
