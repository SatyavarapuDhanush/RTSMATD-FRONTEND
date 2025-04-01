import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FileUpload from "./components/FileUpload";
import ThreatList from "./components/ThreatList";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SecurityMonitoring from "./components/SecurityMonitor"; // ✅ Import Threat Detection Component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<FileUpload />} />
            <Route path="/threats" element={<ThreatList />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/security" element={<SecurityMonitoring />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
