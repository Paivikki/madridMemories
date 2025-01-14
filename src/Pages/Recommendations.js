import React, { useState, useEffect } from 'react';
import { TextField, InputLabel, FormControl, Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Alert } from '@mui/material';
import useDocumentTitle from '../useDocumentTitle';


const Recommendations = () => {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [links, setLinks] = useState('');
    const [type, setType] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [nameError, setNameError] = useState(false);
    const [placeError, setPlaceError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [error, setError] = useState(false);

    useDocumentTitle('Submit Your Recommendations - Madrid Memories');



    useEffect(() => {
        const storedRecommendations = JSON.parse(localStorage.getItem('recommendations'));
        if (storedRecommendations) {
            setRecommendations(storedRecommendations);
        }
    }, []);

    const handleNameChange = e => {
        setName(e.target.value);
        if (e.target.validity.valid) {
            setNameError(false);
        } else {
            setNameError(true);
        }
    };

    const handlePlaceChange = e => {
        setPlace(e.target.value);
        if (e.target.validity.valid) {
            setPlaceError(false);
        } else {
            setPlaceError(true);
        }
    };

    const handleDescriptionChange = e => {
        setDescription(e.target.value);
        if (e.target.validity.valid) {
            setDescriptionError(false);
        } else {
            setDescriptionError(true);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!place) {
            setError('You must include required fields before you can submit');
            setPlaceError(true);
        }
        if (!description) {
            setError('You must include required fields before you can submit');
            setDescriptionError(true);
        }
        else {
            alert("Thank you for your recommendation! Form Successfully Submitted");
            setError(false);


            const newRecommendation = { place, description, type };
            const updatedRecommendations = [...recommendations, newRecommendation];
            setRecommendations(updatedRecommendations);
            localStorage.setItem('recommendations', JSON.stringify(updatedRecommendations));
            // Reset form fields
            setName('');
            setPlace('');
            setDescription('');
            setLinks('');
            setType('');
        }

    };

    return (
        <Container maxWidth="med">
            <Box sx={{ my: 4 }}>
                <Typography variant="h1" sx={{
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
                    Use the following form to submit any places and things you love in Madrid and we might feature them on our site!! To submit the form, press the squared button labeled "SUBMIT".
                </Typography>
                <Container maxWidth="sm">
                    <form onSubmit={handleSubmit} aria-label="Form for submitting recommendations" noValidate>
                        <TextField
                            fullWidth
                            label="Your Name"
                            value={name}
                            onChange={handleNameChange}
                            error={nameError}
                            inputProps={{
                                pattern: "[A-Za-z ]+",
                            }}
                            helperText={
                                nameError ? "Please enter your name (letters and spaces only)" : ""
                            }

                            margin="normal"
                            autoComplete="name"
                        />
                        <TextField
                            fullWidth
                            label="Name of your recommendation (Required)"
                            value={place}
                            onChange={handlePlaceChange}
                            margin="normal"
                            error={placeError}
                            helperText={placeError ? "Please enter the name of your recommendation" : ""}
                            required
                        />
                        <TextField
                            fullWidth
                            label="A brief description of you recommendation (Required)"
                            value={description}
                            onChange={handleDescriptionChange}
                            margin="normal"
                            multiline
                            rows={4}
                            error={descriptionError}
                            helperText={descriptionError ? "Please enter the description of your recommendation" : ""}
                            required
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
                        <FormControl fullWidth>
                            <InputLabel id="simple-select-label">Select the Type of Recommendation</InputLabel>
                            <Select
                                labelId="simple-select-label"
                                id="simple-select"
                                value={type}
                                label="Select the Type of Recommendation"
                                onChange={(e) => setType(e.target.value)}
                            >
                                <MenuItem value="Food">Food</MenuItem>
                                <MenuItem value="Museum">Museum</MenuItem>
                                <MenuItem value="Attraction">Attraction</MenuItem>
                                <MenuItem value="Activity">Activity</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <Select
                            fullWidth
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            displayEmpty
                            margin="normal"
                        >
                            <MenuItem value="" disabled>
                                Select the Type of Recommendation
                            </MenuItem>
                            <MenuItem value="Food">Food</MenuItem>
                            <MenuItem value="Museum">Museum</MenuItem>
                            <MenuItem value="Attraction">Attraction</MenuItem>
                            <MenuItem value="Activity">Activity</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select> */}
                        {error && (
                            <Typography color="error" sx={{ mt: 2 }}>
                                {error}
                            </Typography>
                        )}
                        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }} formnovalidate >
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
                </Container>
            </Box>

        </Container>
    );
};

export default Recommendations;