import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css"; // Import the CSS file
import axios from "axios";

const Hero = () => {
    const [file, setFile] = useState(null);
    const [responseMessage, setResponseMessage] = useState("");
    const [resumeData, setResumeData] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onFileUpload = async () => {
        const formData = new FormData();
        formData.append("resume", file);

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/upload/",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

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
        <section id="home">
            <div className="container">
                <h1 className="hero-title">Welcome to Resume Screening</h1>
                <p className="hero-description">
                    Upload your resume and get it analyzed against top job
                    descriptions. Start your career journey with us.
                </p>

                {/* New Hero Icon */}
                <div className="hero-icon">
                    <i
                        className="bi bi-file-earmark-arrow-up"
                        style={{
                            fontSize: "3rem",
                            color: "#28a745", // Green color for the icon
                        }}></i>
                </div>

                <div className="hero-btn-container">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "1.5rem",
                            alignItems: "center",
                        }}>
                        {/* File Input */}
                        <input
                            id="fileUpload"
                            className="hero-file-input"
                            type="file"
                            onChange={onFileChange}
                        />

                        {/* Upload Resume Button */}
                        <button className="hero-btn" onClick={onFileUpload}>
                            Upload Resume
                        </button>
                    </div>
                </div>

                {responseMessage && <p>{responseMessage}</p>}

                {resumeData && (
                    <div className="mt-4">
                        <h3>Extracted Data:</h3>
                        <table className="table custom-table">
                            <thead>
                                <tr>
                                    <th>Field</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Name</strong>
                                    </td>
                                    <td>{resumeData.name}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Email</strong>
                                    </td>
                                    <td>{resumeData.email}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Phone</strong>
                                    </td>
                                    <td>{resumeData.phone}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Skills</strong>
                                    </td>
                                    <td>
                                        {Array.isArray(resumeData.skills)
                                            ? resumeData.skills.join(", ")
                                            : "No skills available"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                <input
                    type="file"
                    id="fileUpload"
                    className="d-none"
                    accept=".pdf,.doc,.docx"
                />
            </div>
        </section>
    );
};

export default Hero;
