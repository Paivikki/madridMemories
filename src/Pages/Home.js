import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import ImageButton from '../Components/Home/ImageButton';
import ImageWithText from '../Components/Home/ImageWithText';

export default function HomePage() {
  return (
    <div>
      <ImageButton></ImageButton>
      <Typography variant="h2" style={{ marginTop: "3rem", marginLeft: "3rem", marginRight: '3rem' }}>About Us</Typography>
      <ImageWithText></ImageWithText>
    </div>
  );
}