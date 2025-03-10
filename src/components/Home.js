import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

import "./Home.css";

function Home() {
  return (
    <div className="container">
      
      <div className="content">
        <h1>Realtime Cloud Monitoring & Threat Detection</h1>
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;