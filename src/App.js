import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import UploadPage from "./components/UploadPage";
import ResultsPage from "./components/ResultsPage";

function App() {
    return (
        <Router>
            <Container>
                <Switch>
                    <Route exact path="/" component={UploadPage} />
                    <Route path="/results" component={ResultsPage} />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
