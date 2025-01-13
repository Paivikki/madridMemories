import React from 'react';
import { Typography, Box } from '@mui/material';

const NIEAppointments = () => {
    return (
        <Box>
            <Typography variant="h5" component="h2" gutterBottom>
                NIE Appointments
            </Typography>
            <Typography paragraph>
                Getting your NIE can feel challenging, but good preparation makes it easier. Here are some key steps to ensure you’re ready:
                <ol>
                    <li><h4>Schedule Your Appointment:</h4> </li>
                    <ul>
                        <li>NIE appointments are booked online through the government portal. Check the portal frequently since appointments fill up fast. Checking on Monday mornings has been the most successful for us to find appointment times.
                        </li>
                    </ul>
                    <li><h4>Pay the NIE Tax:</h4> </li>
                    <ul>
                        <li>You need to pay a tax before your appointment. Go to a local bank to handle this. You’ll need the completed tax form (<a href="https://www.exteriores.gob.es/Consulados/londres/en/Information-consular-services/Documents/790%20Template.pdf" rel="Link to the Modelo 790 document." target="_blank">Link to Modelo 790</a>), which you can download and print from the official website. Keep the receipt as proof of payment.
                        </li>
                    </ul>
                    <li><h4>Prepare Your Documents:</h4></li>
                    <ul>
                        <li><b>NIE Application Form (<a href="https://www.exteriores.gob.es/Embajadas/helsinki/en/ServiciosConsulares/Paginas/Consular/NIE.aspx" rel="Link to the EX-15 form" target="_blank">EX-15</a>):</b> Ensure it is filled out completely and accurately.</li>

                        <li><b>Insurance Card:</b> Your health insurance details are mandatory.</li>

                        <li><b>Photocopies of Your Documents:</b> Bring Spanish translations of all your documents. Bring a printed copy of all forms and documents.</li>

                        <li><b>Passport:</b> Carry both the original and a photocopy.</li>
                    </ul>
                    <li><h4>Communication Tips:</h4> </li>
                    <ul>
                        <li>The officials processing NIEs usually converse in Spanish, so it’s beneficial to have all documents translated into Spanish and prepare any explanations in advance if needed.</li>
                    </ul>
                    <li><h4>On the Day:</h4></li>
                    <ul>
                        <li>Arrive early and double-check you have all your documents.</li>

                        <li>Be polite and patient, even if the process feels slow.</li>

                        <li>By following these steps, you’ll streamline your NIE application process and reduce unnecessary stress.</li>
                    </ul>
                </ol>
            </Typography>
        </Box>
    );
};

export default NIEAppointments;