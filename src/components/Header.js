import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure JS is imported
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure CSS is imported

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleFileUpload = () => {
        document.getElementById("fileUpload").click(); // Trigger file input
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    const closeMenu = () => {
        setMenuOpen(false); // Explicitly close the menu
    };

    return (
        <header className="sticky-top">
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    background:
                        "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // Modern gradient
                    fontFamily: "'Poppins', sans-serif", // Custom font
                }}>
                <div className="container">
                    {/* Logo or App Name */}
                    <a
                        className="navbar-brand fw-bold text-white"
                        href="/" // Linking to the home section
                        style={{ fontSize: "1.5rem" }}>
                        ResumeScreening
                    </a>

                    {/* Mobile Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-expanded={menuOpen}
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                        style={{
                            border: "none",
                            outline: "none",
                            position: "absolute",
                            right: "1rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 1050,
                        }}>
                        {menuOpen ? (
                            <span
                                className="text-white"
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    lineHeight: "1",
                                }}>
                                ✖
                            </span>
                        ) : (
                            <span
                                className="navbar-toggler-icon"
                                style={{
                                    filter: "invert(1)", // White icon
                                }}></span>
                        )}
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`collapse navbar-collapse ${
                            menuOpen ? "show" : ""
                        }`}
                        id="navbarNav"
                        style={{
                            transition: "all 0.3s ease-in-out", // Smooth transition
                        }}>
                        <ul
                            className="navbar-nav mx-auto d-flex justify-content-center align-items-center gap-4"
                            style={{
                                flexWrap: "nowrap",
                                marginTop: menuOpen ? "0" : "-10px", // Adjust top margin when opened
                            }}>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="#home"
                                    onClick={closeMenu} // Close menu when a link is clicked
                                    style={{
                                        fontSize: "1rem",
                                    }}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="#about"
                                    onClick={closeMenu}
                                    style={{
                                        fontSize: "1rem",
                                    }}>
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="#features"
                                    onClick={closeMenu}
                                    style={{
                                        fontSize: "1rem",
                                    }}>
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-white"
                                    href="#contact"
                                    onClick={closeMenu}
                                    style={{
                                        fontSize: "1rem",
                                    }}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        {/* Upload Resume Button */}
                        <div
                            className="d-none d-lg-block ms-lg-3"
                            style={{
                                position: "relative",
                            }}>
                            <button
                                className="btn btn-success"
                                onClick={handleFileUpload}
                                style={{
                                    backgroundColor: "#28a745", // Fresh green
                                    border: "none",
                                    fontSize: "1rem",
                                    padding: "0.5rem 1rem",
                                }}>
                                Upload Resume
                            </button>
                            <input
                                type="file"
                                id="fileUpload"
                                className="d-none"
                                accept=".pdf,.doc,.docx"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
