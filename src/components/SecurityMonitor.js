import React, { useState } from "react";
import "./SecurityMonitor.css";

const SecurityMonitoring = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [scanResult, setScanResult] = useState("");
  const [threatLogs, setThreatLogs] = useState([]);

  const scanFile = () => {
    if (!selectedFile) {
      setScanResult("⚠️ No file selected.");
      return;
    }

    const fileName = selectedFile.name.toLowerCase();
    const dangerousExtensions = [".exe", ".bat", ".cmd", ".vbs", ".sh", ".js"];
    const containsThreat = dangerousExtensions.some((ext) => fileName.endsWith(ext));

    if (containsThreat) {
      const warningMessage = `🚨 Threat detected in ${selectedFile.name}`;
      setScanResult(warningMessage);
      setThreatLogs((prevLogs) => [...prevLogs, warningMessage]);
    } else {
      setScanResult(`✅ ${selectedFile.name} is safe.`);
    }
  };

  return (
    <div className="security-container">
      <h1>Security Monitoring</h1>

      <div className="upload-section">
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button onClick={scanFile}>Scan File</button>
      </div>

      {scanResult && <div className={`scan-result ${scanResult.includes("🚨") ? "danger" : "safe"}`}>
        {scanResult}
      </div>}

      <div className="threat-logs">
        <h2>Threat Logs</h2>
        <ul>
          {threatLogs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecurityMonitoring;
