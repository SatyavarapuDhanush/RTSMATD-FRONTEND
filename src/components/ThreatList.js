import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ThreatList.css";

function ThreatList() {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/threats/getallthreats")
      .then((response) => setThreats(response.data))
      .catch((error) => console.error("Error fetching threats:", error));
  }, []);

  return (
    <div className="threat-list">
      <h2>Detected Threats</h2>
      <ul>
        {threats.map((threat, index) => (
          <li key={index}>
            <strong>{threat.name}</strong> - {threat.severity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThreatList;
