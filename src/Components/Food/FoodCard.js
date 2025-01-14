import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import { Margin } from '@mui/icons-material';
import { Link } from '@mui/material';

export default function MediaCard({ image, title, text, onShare, rating, category }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
          <Chip label={category} size="small" variant="outlined" style={{marginLeft: "1rem"}}/>
        </Typography>
        <Rating name="read-only" value={rating} readOnly style={{marginButton: "1rem"}}/>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{minHeight: 27}} href={onShare} target="_blank">Open location in Google Maps</Button>
      </CardActions>
    </Card>
  );
}
