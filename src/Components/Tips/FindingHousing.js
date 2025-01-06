import React from 'react';
import { Typography, Box } from '@mui/material';

const FindingHousing = () => {
    return (
        <Box>
            <Typography variant="h5" component="h2" gutterBottom>
                Finding Housing
            </Typography>
            <Typography paragraph>
                Finding housing in Madrid can be challenging, but here are some tips to help you out...
            </Typography>
            <img src="path-to-your-image.jpg" alt="Housing" style={{ width: '100%', height: 'auto' }} />
            {/* Add more content and images as needed */}
        </Box>
    );
};

export default FindingHousing;