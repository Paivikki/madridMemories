import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import ImageButton1 from '../Components/Home/ImageButton1';
import ImageButton2 from '../Components/Home/ImageButton2';
import ImageWithText from '../Components/Home/ImageWithText';
import Box from '@mui/material';
import useDocumentTitle from '../useDocumentTitle';


export default function HomePage() {
  useDocumentTitle('Home Page - Madrid Memories');


  return (
    <div>
      <div>
        <ImageButton1></ImageButton1>
        <ImageButton2></ImageButton2>
      </div>
      <ImageWithText></ImageWithText>
    </div>
  );
}