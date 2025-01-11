import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import food from './assets/food.jpg';
import recommendations from './assets/recommendations.jpg';
import things from './assets/things.jpg';
import tips from './assets/tips.jpg';

import { Link } from 'react-router-dom';

const images = [
  {
    url: food,
    title: 'Food',
    width: '100%',
    to: '/food',
  },
  {
    url: things,
    title: 'Things to do',
    width: '100%',
    to: '/things-to-do',
  },
  {
    url: tips,
    title: 'Tips',
    width: '100%',
    to: '/tips',
  },
  {
    url: recommendations,
    title: 'Your Recommendation',
    width: '100%',
    to: '/recommendations',
  },
];

const ImageButtonBase = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.3,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ImageButton() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButtonBase
          focusRipple
          key={image.title}
          style={{
            //width: image.width,
            textDecoration: 'none', // Remove underline
            width: '50%', // Ensure width matches the button
            display: 'inline-block', // Maintain layout consistency

          }}
          href={image.to}
          aria-label={`Go to ${image.title} page`}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" /> 
          <Image >
            <Typography
              // component="span"
              // variant="subtitle1"
              // color="inherit"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
              style={{ background: "black" }}
            >
              {image.title}
            </Typography>
          </Image>
        </ImageButtonBase>
      ))}
    </Box>
  );
}
