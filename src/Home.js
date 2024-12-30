import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <div>
      <Typography variant="h2">Welcome to My Website</Typography>
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
      </Button>
    </div>
  );
}