import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import ImageButton from '../Components/Home/ImageButton';
import ImageWithText from '../Components/Home/ImageWithText';


export default function HomePage() {
  return (
    <div>
      {/* 
      <Button variant="contained" color="primary" component={Link} to="/things-to-do">
        Things to Do
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/recommendations">
        Recommendations
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/tips">
        Tips
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/food">
        Food
      </Button> */}
      <ImageButton></ImageButton>
      <Typography variant="h1"  sx={{
          marginTop: '4rem',
          marginLeft: '2rem',
          marginRight: '3rem',
          fontSize: '3.75rem',
          fontWeight: 500,
          lineHeight: 1.2,
          textAlign: 'left',
        }}>
        About Us
      </Typography>
      <ImageWithText></ImageWithText>
    </div>
  );
}