import React from "react";

const Footer = () => (
    <footer className="bg-dark text-white py-4">
        <div className="container text-center">
            <p>&copy; 2024 ResumeScreening. All rights reserved.</p>
            <p>
                <a
                    href="mailto:support@resumescreening.com"
                    className="text-decoration-none text-white">
                    support@resumescreening.com
                </a>{" "}
                |<span> +1 234 567 890 </span>
            </p>
            <div className="mt-2">
                <a href="#" className="text-white mx-2">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white mx-2">
                    <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white mx-2">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
