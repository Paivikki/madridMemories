import React from 'react';
import { Typography, Box } from '@mui/material';

const MadridTransportation = () => {
    return (
        <Box>
            <Typography variant="h5" component="h2" gutterBottom>
                Madrid Transportation
            </Typography>
            <Typography paragraph>
                Navigating Madrid's transportation system is easy with these tips...
            </Typography>
            <img src="path-to-your-image.jpg" alt="Transportation" style={{ width: '100%', height: 'auto' }} />
            {/* Add more content and images as needed */}
        </Box>
    );
};

export default MadridTransportation;