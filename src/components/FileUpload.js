import React, { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8080/api/files/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("File uploaded successfully!");
    } catch (error) {
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

export default FileUpload;
