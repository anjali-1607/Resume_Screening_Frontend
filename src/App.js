import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import UploadPage from "./components/UploadPage";
import ResultsPage from "./components/ResultPage";
// import { Routes } from "react-router";
// import { BrowserRouter } from "react-router-dom/dist";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Container> */}
                {/* <Switch> */}
                <Route exact path="/" element={<UploadPage />} />
                <Route path="/results" element={<ResultsPage />} />
                {/* </Switch> */}
                {/* </Container> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
