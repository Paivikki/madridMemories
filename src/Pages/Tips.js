// Tips.js
import React, { useState } from 'react';
import { Container, Box, Tabs, Tab, Typography } from '@mui/material';
import FindingHousing from '../Components/Tips/FindingHousing';
import NIEAppointments from '../Components/Tips/NIEAppointments';
import MadridTransportation from '../Components/Tips/MadridTransportation';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const Tips = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="md">
            {/* <Container > */}
            <Box>
            {/* <Box sx={{ my: 4 }}> */}
                <Typography variant="h1"  sx={{
                    marginTop: '4rem',
                    marginLeft: '0rem',
                    marginRight: '0rem',
                    fontSize: '3.75rem',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    textAlign: 'left',
                    }}>
                        Tips and Tricks
                </Typography>
                <Typography variant="body1" sx={{ align: 'left', marginTop: "1rem", marginLeft: "0rem", marginRight: '0rem', marginBottom: '2rem',   }}>
                    Here you can find some general tips and tricks if you are moving to the city for the first time, or just new to navigating around Madrd!
                </Typography>
                {/* <Typography variant="h4" component="h1" gutterBottom>
                    Tips and Tricks
                </Typography> */}
                <Tabs value={value} onChange={handleChange} aria-label="tips and tricks tabs">
                    <Tab label="Finding Housing" />
                    <Tab label="NIE Appointments" />
                    <Tab label="Madrid Transportation" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <FindingHousing />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NIEAppointments />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MadridTransportation />
                </TabPanel>
            </Box>
        </Container>
    );
};

export default Tips;