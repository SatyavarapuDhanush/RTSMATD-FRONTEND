import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

import "./Home.css";

function Home() {
  return (
    <div className="container">
      
      <div className="content">
        <h1>Real-Time Security Monitoring & Threat Detection</h1>
        <p>Real-time security monitoring and threat detection is a cybersecurity process that continuously monitors systems and networks to identify and respond to security threats</p>
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;