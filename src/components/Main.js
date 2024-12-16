import React from "react";
import Hero from "./Hero";
import UploadPage from "./UploadPage";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import RecruiterComponent from "./RecruiterComponent ";

export default function Main() {
    return (
        <>
            <Header />
            <Hero />
            <RecruiterComponent />
            {/* <UploadPage /> */}
            <AboutUs />
            <Footer />
        </>
    );
}
