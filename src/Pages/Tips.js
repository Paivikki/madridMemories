// Tips.js
import React, { useState } from 'react';
import { Container, Box, Tabs, Tab, Typography } from '@mui/material';
import FindingHousing from '../Components/Tips/FindingHousing';
import NIEAppointments from '../Components/Tips/NIEAppointments';
import MadridTransportation from '../Components/Tips/MadridTransportation';
import useDocumentTitle from '../useDocumentTitle';

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
    useDocumentTitle('Tips and Tricks - Madrid Memories');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="med">
            {/* <Container > */}
            <Box>
                {/* <Box sx={{ my: 4 }}> */}
                <Typography variant="h1" sx={{
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
                <Typography variant="body1" sx={{ align: 'left', marginTop: "1rem", marginLeft: "0rem", marginRight: '0rem', marginBottom: '2rem', }}>
                    Here you can find some general tips and tricks if you are moving to the city for the first time, or just new to navigating around Madrd!
                </Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Tips and Tricks tabs"
                    role="tablist"
                >
                    <Tab
                        label="Finding Housing"
                        id="tab-0"
                        aria-controls="tabpanel-0"
                        aria-selected={value === 0}
                        tabIndex={value === 0 ? 0 : -1}
                    />
                    <Tab
                        label="NIE Appointments"
                        id="tab-1"
                        aria-controls="tabpanel-1"
                        aria-selected={value === 1}
                        tabIndex={value === 1 ? 0 : -1}
                    />
                    <Tab
                        label="Madrid Transportation"
                        id="tab-2"
                        aria-controls="tabpanel-2"
                        aria-selected={value === 2}
                        tabIndex={value === 2 ? 0 : -1}
                    />
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