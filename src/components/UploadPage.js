// src/UploadPage.js

import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [resumeData, setResumeData] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.status === 200) {
        setResponseMessage("Resume uploaded successfully!");
        setResumeData(response.data.data);
      } else {
        setResponseMessage("Error uploading file.");
      }
    } catch (error) {
      setResponseMessage("Error uploading file. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Upload Resume</h2>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>

      {responseMessage && <p>{responseMessage}</p>}

      {resumeData && (
        <div>
          <h3>Extracted Data:</h3>
          <p><strong>Name:</strong> {resumeData.name}</p>
          <p><strong>Email:</strong> {resumeData.email}</p>
          <p><strong>Phone:</strong> {resumeData.phone}</p>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
