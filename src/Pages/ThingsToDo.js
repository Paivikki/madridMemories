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
function createData(category, name, address, openingHours, price, timeSpent, highlights, resources, description) {
  return {
    category,
    name,
    address,
    openingHours,
    price,
    timeSpent,
    highlights,
    resources,
    description,
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
                {row.description}
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
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    'Museum', 
    'Museo del Prado', 
    'Calle de Felipe IV, s/n, 28014 Madrid', 
    '10:00 AM - 8:00 PM', 
    '€15', 
    '2-3 hours', 
    'Famous art collection, Velázquez, Goya', 
    'https://www.museodelprado.es', 
    'The Museo del Prado is one of the most renowned art museums in the world, housing an extensive collection of European art dating from the 12th to the early 20th century. It is particularly famous for its works by Spanish masters like Velázquez, Goya, and El Greco, as well as Italian and Flemish artists. Visitors can explore the rich cultural history captured in the masterpieces displayed throughout its grand halls. Whether you are an art enthusiast or a casual visitor, the museum offers a deep dive into European art history that is both educational and awe-inspiring.'
  ),
  createData(
    'Park', 
    'Retiro Park', 
    'Plaza de la Independencia, 7, 28001 Madrid', 
    '6:00 AM - 10:00 PM', 
    'Free', 
    '1-2 hours', 
    'Beautiful gardens, boating lake, Crystal Palace', 
    'https://www.esmadrid.com/informacion-turistica/parque-del-retiro', 
    'Retiro Park is one of Madrid’s most beloved green spaces, offering a peaceful retreat in the heart of the city. It boasts expansive gardens, picturesque walking paths, and a large boating lake where visitors can rent rowboats. The park also features the stunning Crystal Palace, a glass pavilion that hosts art exhibitions, as well as various sculptures and monuments that add to its charm. Whether you’re looking to relax by the water, explore the lush surroundings, or enjoy a leisurely stroll, Retiro Park is a perfect escape from the city hustle.'
  ),
  createData(
    'Palace', 
    'Royal Palace of Madrid', 
    'Calle de Bailén, s/n, 28071 Madrid', 
    '10:00 AM - 6:00 PM', 
    '€13', 
    '1.5-2 hours', 
    'Royal apartments, Throne Room, Armory', 
    'https://www.patrimonionacional.es/en/real-sitio/palacio-real-de-madrid', 
    'The Royal Palace of Madrid is the official residence of the Spanish Royal Family, though it is now used for official ceremonies and events. This grandiose palace is a symbol of Spain’s royal history and a marvel of Baroque architecture. Visitors can explore the stunning Royal Apartments, the majestic Throne Room, and the extensive Armory, which contains an impressive collection of armor and weapons. The palace is beautifully decorated with works of art and intricate furnishings, offering a glimpse into the opulence of Spain’s monarchy throughout the centuries.'
  ),
  createData(
    'Square', 
    'Plaza Mayor', 
    'Plaza Mayor, 28012 Madrid', 
    'Open 24 hours', 
    'Free', 
    '30 minutes - 1 hour', 
    'Historic square, cafes, street performers', 
    'https://www.esmadrid.com/en/tourist-information/plaza-mayor-madrid', 
    'Plaza Mayor is one of the most iconic landmarks in Madrid, known for its historic charm and vibrant atmosphere. Surrounded by beautiful arcades and traditional Spanish architecture, this grand square has been the site of many significant events throughout history, from royal ceremonies to public executions. Today, it is a lively hub with cafés, shops, and street performers, making it a popular spot for both locals and tourists. Whether you are enjoying a coffee on a terrace or simply taking in the view, Plaza Mayor offers a quintessential Madrid experience.'
  ),
  createData(
    'Market', 
    'Mercado de San Miguel', 
    'Plaza de San Miguel, s/n, 28005 Madrid', 
    '10:00 AM - 12:00 AM', 
    'Varies by vendor', 
    '1 hour', 
    'Fresh food, tapas, seafood, local products', 
    'https://www.mercadodesanmiguel.es/en', 
    'Mercado de San Miguel is a historic market that has been transformed into a bustling food hall, offering a wide variety of gourmet delights. Located in the heart of Madrid, the market is a feast for the senses, with fresh seafood, local delicacies, tapas, and artisan products available from numerous vendors. Whether you’re looking for a quick snack or a more substantial meal, the market offers something for every taste. Its lively atmosphere, along with the chance to sample authentic Spanish flavors, makes Mercado de San Miguel a must-visit spot for food lovers.'
  ),
  createData(
    'Museum', 
    'Museo Reina Sofía', 
    'Calle de Santa Isabel, 52, 28012 Madrid', 
    '10:00 AM - 9:00 PM', 
    '€10', 
    '2 hours', 
    'Modern art, Picasso’s Guernica', 
    'https://www.museoreinasofia.es/en', 
    'Museo Reina Sofía is Madrid’s premier modern art museum, housing one of the most important collections of contemporary art in Spain. Among its iconic works is Picasso’s masterpiece, *Guernica*, which remains one of the most powerful anti-war statements in art history. The museum also features works by Salvador Dalí, Joan Miró, and other influential 20th-century artists. The museum’s striking architecture, combined with its rich collection, makes it a significant cultural destination for art lovers and those interested in the evolution of modern art.'
  ),
  createData(
    'Park', 
    'Casa de Campo', 
    'Carretera de las Aves, s/n, 28011 Madrid', 
    '6:00 AM - 10:00 PM', 
    'Free', 
    '2-3 hours', 
    'Madrid’s largest park, zoo, lake', 
    'https://www.esmadrid.com/informacion-turistica/casa-de-campo', 
    'Casa de Campo is the largest park in Madrid, offering a vast expanse of green space for outdoor activities. It features a beautiful lake where visitors can rent boats, as well as wooded areas perfect for hiking, biking, or simply enjoying nature. The park is also home to the Madrid Zoo, making it a great destination for families. Casa de Campo provides a peaceful escape from the city and is ideal for those looking to enjoy a day immersed in nature or engage in outdoor recreation.'
  ),
  createData(
    'Museum', 
    'Museo Thyssen-Bornemisza', 
    'Paseo del Prado, 8, 28014 Madrid', 
    '10:00 AM - 7:00 PM', 
    '€13', 
    '1.5-2 hours', 
    'Impressive collection, Van Gogh, Monet, Rembrandt', 
    'https://www.museothyssen.org/en', 
    'Museo Thyssen-Bornemisza is home to one of the world’s most important private art collections, offering visitors a stunning array of works spanning several centuries. The museum boasts masterpieces by artists such as Van Gogh, Monet, Rembrandt, and many more. Its diverse collection includes everything from Renaissance art to contemporary pieces, providing a rich overview of the evolution of Western art. With its impressive works, thoughtful exhibitions, and central location, the museum is a must-visit for art enthusiasts and anyone interested in cultural history.'
  ),
  createData(
    'Monument', 
    'Puerta del Sol', 
    'Puerta del Sol, 28013 Madrid', 
    'Open 24 hours', 
    'Free', 
    '30 minutes - 1 hour', 
    'Historical landmark, symbol of Madrid', 
    'https://www.esmadrid.com/en/tourist-information/puerta-del-sol', 
    'Puerta del Sol is one of Madrid’s most important landmarks, serving as the symbolic center of the city. It is known for its historical significance as the site where many important events in Spanish history have taken place. The square is also famous for being the starting point for Spain’s network of radial roads. Visitors can admire the clock tower, where the traditional *Nochevieja* (New Year’s Eve) countdown takes place, and explore the lively area surrounding the square, full of shops, cafés, and street performers. Puerta del Sol is a true representation of Madrid’s vibrant and historic character.'
  ),
  createData(
    'Church', 
    'Almudena Cathedral', 
    'Calle de Bailén, 10, 28013 Madrid', 
    '9:00 AM - 8:00 PM', 
    'Free', 
    '1 hour', 
    'Gothic and neo-Romanesque architecture', 
    'https://catedraldelaalmudena.es/', 
    'Almudena Cathedral is one of Madrid’s most striking architectural landmarks, combining elements of Gothic and neo-Romanesque styles. The cathedral, which took over 100 years to complete, is dedicated to the Virgin of Almudena, the patron saint of Madrid. Visitors can admire its impressive exterior and explore the serene interior, which features beautiful stained glass windows, intricate sculptures, and a richly decorated altar. The cathedral offers panoramic views of the city from its dome, making it a tranquil spot to appreciate Madrid’s skyline.'
  ),
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