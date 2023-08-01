import * as React from 'react';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Avatar alt="김재환" src="./dIM3P8xeYuehNHdo4LnLAo1K7Ha08gC9yfOQ_6k03-GKbHdbdX_tbqGeUqOhtnxyDaHdsmf2OZABRvrB1IErXg.svg" 
      sx={{ width: 100, height: 100 }}/>

      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </Box>
  );
}