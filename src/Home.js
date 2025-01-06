import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import ImageButton from './ImageButton';
import ImageWithText from './ImageWithText';

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
      <Typography variant="h2" style={{ marginTop: "3rem", marginLeft: "3rem" }}>About Us</Typography>
      <ImageWithText></ImageWithText>
    </div>
  );
}