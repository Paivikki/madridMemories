import React from 'react';
import { Typography, Box } from '@mui/material';

const MadridTransportation = () => {
    return (
        <Box>
            <Typography variant="h5" component="h2" gutterBottom>
                Madrid Transportation
            </Typography>
            <Typography paragraph>
                Madrid’s public transport is fast, cheap, and easy to use. Here are some essentials for getting around:
                <ol>
                    <li><h3>Personal Transportation Card: </h3></li>
                    <ul><li>
                        Apply for a personal transportation card (Tarjeta Transporte Público) as soon as possible. You can load it at metro kiosks or recharge using the Tarjeta Transporte app.
                    </li></ul>
                    <li><h3>Metro and Bus Tickets:</h3></li>
                    <ul>
                        <li>Single-use metro cards are available at station vending machines.</li>

                        <li>Bus tickets can be purchased directly on the bus. If paying with cash, make sure you have change that is smaller than 5€.</li>
                    </ul>
                    <li><h3>Plan Your Routes: </h3></li>
                    <ul>
                        <li>While Google Maps works well for directions, apps like Citymapper often provide more accurate and comprehensive information for Madrid’s public transport system.</li>
                    </ul>
                    <li><h3>Stay Connected: </h3></li>
                    <ul>
                        <li>The metro and buses run frequently, but having the transportation apps handy can help you plan for peak hours or unexpected delays.</li>
                    </ul>
                </ol>
                With these tips, you’ll navigate Madrid like a local in no time.

            </Typography>
        </Box>
    );
};

export default MadridTransportation;