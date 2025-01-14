import * as React from 'react';
import { Typography, styled } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from 'prop-types';
import shadows from '@mui/material/styles/shadows';
import useDocumentTitle from '../useDocumentTitle';


// Styled components for table cells and rows
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Data creation function
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

// Row component for collapsible rows
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <StyledTableRow>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.category}
        </StyledTableCell>
        <StyledTableCell align="left">{row.name}</StyledTableCell>
        <StyledTableCell align="left">{row.address}</StyledTableCell>
        <StyledTableCell align="left">{row.openingHours}</StyledTableCell>
        <StyledTableCell align="left">{row.price}</StyledTableCell>
        <StyledTableCell align="left">{row.timeSpent}</StyledTableCell>
        <StyledTableCell align="left">{row.highlights}</StyledTableCell>
        <StyledTableCell align="left">
          <a href={row.resources} target="_blank" rel="noopener noreferrer">
            Website {row.name}
          </a>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body1" gutterBottom>
                Additional details about <strong>{row.name}</strong>.
              </Typography>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
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

// Example rows
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

// Main component
export default function ThingsToDoPage() {
  useDocumentTitle('Things To Do - Madrid Memories');

  return (
    <div>
       <Typography variant="h1"  sx={{
          marginTop: '4rem',
          marginLeft: '3rem',
          marginRight: '3rem',
          fontSize: '3.75rem',
          fontWeight: 500,
          lineHeight: 1.2,
          textAlign: 'left',
        }}>
          Things To Do
      </Typography>
      <Typography variant="body1"  gutterBottom style={{ align: 'left', marginTop: "1rem", marginLeft: "3rem", marginRight: '3rem',   }}>
        Here you can find some of the things that we did in Madrid together with some practical information and a short description. Have fun to go do it yourself!
      </Typography>

      <TableContainer style={{ padding: '3rem', maxWidth: "fit-content"}}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Opening Hours</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">Time Spent</StyledTableCell>
              <StyledTableCell align="left">Highlights</StyledTableCell>
              <StyledTableCell align="left">Resources</StyledTableCell>
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