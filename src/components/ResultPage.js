import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Spinner, Form, Button } from "react-bootstrap";

const ResultsPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [jobDescription, setJobDescription] = useState("");

    const fetchResults = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/get_results/",
                { job_description: jobDescription }
            );
            setData(response.data.data);
        } catch (error) {
            console.error("Error fetching results:", error);
        }
        setIsLoading(false);
    };

    return (
        <Container>
            <div className="my-4">
                <h2>Candidate Results</h2>
                <Form className="mb-4">
                    <Form.Group controlId="jobDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter job description"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        className="mt-3"
                        onClick={fetchResults}
                        disabled={!jobDescription.trim()}>
                        Get Results
                    </Button>
                </Form>
            </div>

            {isLoading ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Skills</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((candidate, index) => (
                                <tr key={index}>
                                    <td>{candidate.name}</td>
                                    <td>{candidate.email}</td>
                                    <td>{candidate.phone}</td>
                                    <td>{candidate?.skills}</td>
                                    <td>{candidate.rank}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default ResultsPage;
