import React from 'react';
import { Typography, Box } from '@mui/material';

const FindingHousing = () => {
    
    return (
        <Box>
            <Typography variant="h5" component="h2" gutterBottom>
                Finding Housing
            </Typography>
            <Typography paragraph>
                Finding the perfect place to live in Madrid can be an exciting yet challenging task. Here are some tips to help you secure the ideal accommodation:
                <ol>

                    <li><h4>Visit Apartments in Advance:</h4></li>
                    <ul>
                        <li> If possible, schedule visits to apartments before committing. Photos online can be misleading, and visiting in person allows you to assess the area and condition of the property.</li>
                    </ul>
                    <li><h4>Choose Your Location:</h4> </li>
                    <ul>
                        <li>Living in the city center is exciting but usually costs more. If you’re looking for a more affordable option, consider neighborhoods along metro lines for easy access to the city.</li>
                    </ul>

                    <li><h4>Use Trusted Platforms:</h4></li>
                    <ul>
                        <li> Websites like Housing Anywhere, Idealista, and Spotahome are excellent resources for finding student-friendly housing. Many listings are furnished, making the move easier.</li>
                    </ul>

                    <li><h4>Be Quick and Decisive:</h4></li>
                    <ul>  
                        <li>The Madrid housing market is competitive. When you find a suitable place, act fast to secure it.</li>
                    </ul>
                </ol>
                By planning ahead and utilizing these resources, you’ll find a home that suits your needs and budget.

            </Typography>
        </Box>
    );
};

export default FindingHousing;