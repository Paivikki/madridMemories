import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';

export default function MediaCard({ image, title, text, onShare, rating, category }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Chip label={category} size="small" variant="outlined"/>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onShare}>Get direction!</Button>
      </CardActions>
    </Card>
  );
}
