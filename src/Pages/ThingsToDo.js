// ThingsToDoPage.js
import * as React from 'react';
import { Typography } from '@mui/material';

//new
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(category, name, address, openingHours, price, timeSpent, highlights, resources) {
  return {
    category,
    name,
    address,
    openingHours,
    price,
    timeSpent,
    highlights,
    resources,
  };
} 


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.category}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.openingHours}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.timeSpent}</TableCell>
        <TableCell align="right">{row.highlights}</TableCell>
        <TableCell align="right">
          <a href={row.resources} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body1" gutterBottom>
                Additional details about <strong>{row.name}</strong>.
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    openingHours: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    timeSpent: PropTypes.string.isRequired,
    highlights: PropTypes.string.isRequired,
    resources: PropTypes.string.isRequired,
  }).isRequired,
};


const rows = [
  createData('Museum', 'Museo del Prado', 'Calle de Felipe IV, s/n, 28014 Madrid', '10:00 AM - 8:00 PM', '€15', '2-3 hours', 'Famous art collection, Velázquez, Goya', 'https://www.museodelprado.es'),
  createData('Park', 'Retiro Park', 'Plaza de la Independencia, 7, 28001 Madrid', '6:00 AM - 10:00 PM', 'Free', '1-2 hours', 'Beautiful gardens, boating lake, Crystal Palace', 'https://www.esmadrid.com/informacion-turistica/parque-del-retiro'),
  createData('Palace', 'Royal Palace of Madrid', 'Calle de Bailén, s/n, 28071 Madrid', '10:00 AM - 6:00 PM', '€13', '1.5-2 hours', 'Royal apartments, Throne Room, Armory', 'https://www.patrimonionacional.es/en/real-sitio/palacio-real-de-madrid'),
  createData('Square', 'Plaza Mayor', 'Plaza Mayor, 28012 Madrid', 'Open 24 hours', 'Free', '30 minutes - 1 hour', 'Historic square, cafes, street performers', 'https://www.esmadrid.com/en/tourist-information/plaza-mayor'),
  createData('Market', 'Mercado de San Miguel', 'Plaza de San Miguel, s/n, 28005 Madrid', '10:00 AM - 12:00 AM', 'Varies by vendor', '1 hour', 'Fresh food, tapas, seafood, local products', 'https://www.mercadodesanmiguel.es/en'),
  createData('Museum', 'Museo Reina Sofía', 'Calle de Santa Isabel, 52, 28012 Madrid', '10:00 AM - 9:00 PM', '€10', '2 hours', 'Modern art, Picasso’s Guernica', 'https://www.museoreinasofia.es/en'),
  createData('Park', 'Casa de Campo', 'Carretera de las Aves, s/n, 28011 Madrid', '6:00 AM - 10:00 PM', 'Free', '2-3 hours', 'Madrid’s largest park, zoo, lake', 'https://www.esmadrid.com/informacion-turistica/casa-de-campo'),
  createData('Museum', 'Museo Thyssen-Bornemisza', 'Paseo del Prado, 8, 28014 Madrid', '10:00 AM - 7:00 PM', '€13', '1.5-2 hours', 'Impressive collection, Van Gogh, Monet, Rembrandt', 'https://www.museothyssen.org/en'),
  createData('Monument', 'Puerta del Sol', 'Puerta del Sol, 28013 Madrid', 'Open 24 hours', 'Free', '30 minutes - 1 hour', 'Historical landmark, symbol of Madrid', 'https://www.esmadrid.com/en/tourist-information/puerta-del-sol'),
  createData('Church', 'Almudena Cathedral', 'Calle de Bailén, 10, 28013 Madrid', '9:00 AM - 8:00 PM', 'Free', '1 hour', 'Gothic and neo-Romanesque architecture', 'https://www.catedralalmudena.es'),
];

export default function ThingsToDoPage() {
  return (
    <div>
      <Typography variant="h2" align="left" gutterBottom style={{ marginTop: '4rem', marginLeft: '3rem', marginRight: '3rem' }}>
        Things We Did
      </Typography>
      <Typography variant="h6" align="left" gutterBottom style={{ marginTop: '1rem', marginLeft: '3rem', marginRight: '3rem' }}>
        Here you can find some of the things that we did in Madrid together with some practical information and a short description. Have fun to go do it yourself!
      </Typography>

      <TableContainer component={Paper} style={{ padding: '3rem', maxWidth: "fit-content"}}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Category</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Opening Hours</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Time Spent</TableCell>
              <TableCell align="right">Highlights</TableCell>
              <TableCell align="right">Resources</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}