import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from '@mui/material';

const Recommendations = () => {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [links, setLinks] = useState('');
    const [type, setType] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [errors, setErrors] = useState({});


    useEffect(() => {
        const storedRecommendations = JSON.parse(localStorage.getItem('recommendations'));
        if (storedRecommendations) {
            setRecommendations(storedRecommendations);
        }
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!place.trim()) {
            newErrors.place = "Recommendation name is required.";
        }

        if (!description.trim()) {
            newErrors.description = "Description is required.";
        }

        if (!type) {
            newErrors.type = "Type of recommendation is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

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
                <Typography variant="title" sx={{
                    marginTop: '4rem',
                    marginLeft: '0rem',
                    marginRight: '0rem',
                    fontSize: '3.75rem',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    textAlign: 'left',
                }}>
                    Submit Your Recommendations
                </Typography>
                <Typography variant="body1" gutterBottom style={{ align: 'left', marginTop: "1rem", marginLeft: "0rem", marginRight: '0rem', marginBottom: '2rem', }}>
                    Use the Following Form to submit any places and things you love in Madrid and we might feature them on our site!!
                </Typography>
                {/* <Typography variant="h4" component="h1" gutterBottom>
                    Submit a Recommendation!
                </Typography> */}
                <form onSubmit={handleSubmit} aria-label="Form for submitting recommendations">
                    <TextField
                        fullWidth
                        label="Your Name"
                        value={name}
                        onChange={(e) => {
                            const input = e.target.value;
                            // Allow only letters (uppercase and lowercase), spaces, and optional accents
                            const regex = /^[a-zA-Z\s]*$/;
                            if (regex.test(input)) {
                                setName(input);
                            }
                        }}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Name of your recommendation (Required)"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        margin="normal"
                        required
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        fullWidth
                        label="A brief description of you recommendation (Required)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        margin="normal"
                        multiline
                        rows={4}
                        required
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        fullWidth
                        label="Any relevant links (i.e. link to website or maps location)"
                        value={links}
                        onChange={(e) => setLinks(e.target.value)}
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Select
                        fullWidth
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        displayEmpty
                        margin="normal"
                        required
                        error={!!errors.name}
                        helperText={errors.name}
                    >
                        <MenuItem value="" disabled>
                            Select the Type of Recommendation (Required) *
                        </MenuItem>
                        <MenuItem value="Food">Food</MenuItem>
                        <MenuItem value="Museum">Museum</MenuItem>
                        <MenuItem value="Attraction">Attraction</MenuItem>
                        <MenuItem value="Activity">Activity</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    {errors.type && (
                        <p style={{ color: "red", fontSize: "0.875rem", marginTop: "0.5rem" }}>
                            {errors.type}
                        </p>
                    )}
                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </form>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Your Submitted Recommendations
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ align: 'left', marginTop: "1rem", marginLeft: "0rem", marginRight: '0rem', marginBottom: '2rem', }}>
                        Here you can see a list of recommendations you have submitted for us to review.
                    </Typography>
                    <TableContainer component={Paper} aria-label="A table of your recommendations">
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