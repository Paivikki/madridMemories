import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from '@mui/material';

const Recommendations = () => {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const storedRecommendations = JSON.parse(localStorage.getItem('recommendations'));
        if (storedRecommendations) {
            setRecommendations(storedRecommendations);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecommendation = { place, description, type };
        const updatedRecommendations = [...recommendations, newRecommendation];
        setRecommendations(updatedRecommendations);
        localStorage.setItem('recommendations', JSON.stringify(updatedRecommendations));
        // Reset form fields
        setName('');
        setPlace('');
        setDescription('');
        setType('');
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Submit a Recommendation!
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Place Name"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        margin="normal"
                        multiline
                        rows={4}
                        required
                    />
                    <Select
                        fullWidth
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        displayEmpty
                        margin="normal"
                        required
                    >
                        <MenuItem value="" disabled>
                            Select Type
                        </MenuItem>
                        <MenuItem value="Food">Food</MenuItem>
                        <MenuItem value="Museum">Museum</MenuItem>
                        <MenuItem value="Entertainment">Entertainment</MenuItem>
                    </Select>
                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </form>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                       Your Submitted Recommendations
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Place</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recommendations.map((rec, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{rec.place}</TableCell>
                                        <TableCell>{rec.description}</TableCell>
                                        <TableCell>{rec.type}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Container>
    );
};

export default Recommendations;