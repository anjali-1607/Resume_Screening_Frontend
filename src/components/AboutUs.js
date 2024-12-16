import React from "react";
import "./AboutUs.css"; // Importing the custom CSS for AboutUs

const AboutUs = () => (
    <section id="about" className="container my-5 py-5">
        <h2 className="fw-bold mb-4 text-center about-title">About Us</h2>
        <p className="lead text-center about-description">
            ResumeScreening is an AI-powered platform dedicated to simplifying
            the hiring process. We aim to bridge the gap between job seekers and
            employers by offering a fast, accurate, and efficient way to match
            resumes with job descriptions.
        </p>

        <div className="row text-center mt-5">
            {/* Mission Card */}
            <div className="col-md-4 mb-4">
                <div className="card about-card">
                    <div className="card-body">
                        <h5 className="fw-bold about-subheading">Mission</h5>
                        <p className="about-text">
                            To revolutionize hiring with advanced AI technology.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision Card */}
            <div className="col-md-4 mb-4">
                <div className="card about-card">
                    <div className="card-body">
                        <h5 className="fw-bold about-subheading">Vision</h5>
                        <p className="about-text">
                            Connecting talent with opportunities seamlessly.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Card */}
            <div className="col-md-4 mb-4">
                <div className="card about-card">
                    <div className="card-body">
                        <h5 className="fw-bold about-subheading">Values</h5>
                        <p className="about-text">
                            Efficiency, innovation, and transparency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutUs;
