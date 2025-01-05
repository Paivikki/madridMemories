import React from 'react';
import { Typography, Box } from '@mui/material';

const NIEAppointments = () => {
    return (
        <Box>
            <Typography variant="h5" component="h2" gutterBottom>
                NIE Appointments
            </Typography>
            <Typography paragraph>
                Getting your NIE appointment is an important step for living in Spain. Here's what you need to know...
            </Typography>
            <img src="path-to-your-image.jpg" alt="NIE Appointments" style={{ width: '100%', height: 'auto' }} />
            {/* Add more content and images as needed */}
        </Box>
    );
};

export default NIEAppointments;