// ThingsToDoPage.js
import * as React from 'react';
import { Typography } from '@mui/material';

export default function ThingsToDoPage() {
  return (
    <div>
      <Typography variant="h3">Things to Do</Typography>
      <ul>
        <li>Visit the local museum</li>
        <li>Go for a hike in the park</li>
        {/* ... more items */}
      </ul>
    </div>
  );
}
