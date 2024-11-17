import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Spinner } from "react-bootstrap";

const ResultsPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/results/");
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching results:", error);
                setIsLoading(false);
            }
        };
        fetchResults();
    }, []);

    if (isLoading) {
        return (
            <Container>
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    return (
        <Container>
            <h2 className="my-4">Candidate Results</h2>
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
                                <td>{candidate.skills.join(", ")}</td>
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
        </Container>
    );
};

export default ResultsPage;
