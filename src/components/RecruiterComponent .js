import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RecruiterComponent.css"; // Import custom CSS for styling

// Import the image
import img1 from "../assets/img1.jpg"; // Correct path to your image
import { useNavigate } from "react-router";

const RecruiterComponent = () => {
    const [tagline, setTagline] = useState("");
    const [subtagline, setSubtagline] = useState("");
    const [jobDescription, setJobDescription] = useState(null);

    const navigate = useNavigate();

    // Handle file input change
    const onFileChange = (e) => {
        setJobDescription(e.target.files[0]);
    };

    // Handle form submit or button click
    const onJobDescriptionUpload = () => {
        // Logic to handle job description upload
        navigate("/results");
        console.log("Job description uploaded:", jobDescription);
    };

    return (
        <section id="recruiter-section" className="container mt-5">
            <div className="row align-items-center">
                {/* Left side - Form */}
                <div className="col-md-6">
                    <h2 className="recruiter-title">Post a Job</h2>
                    <p className="recruiter-description">
                        Add your job details and upload a job description for
                        matching candidates.
                    </p>

                    {/* Tagline and Subtagline Inputs */}
                    <div className="mb-4">
                        <label htmlFor="tagline" className="recruiter-label">
                            Tagline
                        </label>
                        <input
                            type="text"
                            id="tagline"
                            className="recruiter-input"
                            value={tagline}
                            onChange={(e) => setTagline(e.target.value)}
                            placeholder="Enter tagline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subtagline" className="recruiter-label">
                            Subtagline
                        </label>
                        <input
                            type="text"
                            id="subtagline"
                            className="recruiter-input"
                            value={subtagline}
                            onChange={(e) => setSubtagline(e.target.value)}
                            placeholder="Enter subtagline"
                        />
                    </div>

                    {/* Job Description Upload */}
                    {/* <div className="mb-2">
                        <label
                            htmlFor="jobDescription"
                            className="recruiter-label">
                            Job Description
                        </label>
                        <input
                            type="file"
                            id="jobDescription"
                            className="recruiter-input"
                            accept=".pdf,.doc,.docx"
                            onChange={onFileChange}
                        />
                    </div> */}

                    {/* Submit Button */}
                    <button
                        className="recruiter-btn"
                        onClick={onJobDescriptionUpload}>
                        Upload Job Description
                    </button>
                </div>

                {/* Right side - Recruiter Photo */}
                <div className="col-md-6 text-center">
                    <img
                        src={img1} // Use the imported image here
                        alt="Recruiter"
                        className="img-fluid recruiter-photo-img-square" // New class for large square image
                    />
                </div>
            </div>
        </section>
    );
};

export default RecruiterComponent;
