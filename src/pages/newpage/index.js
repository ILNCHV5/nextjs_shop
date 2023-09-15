import React from 'react';
import { Box } from '@mui/material';
import Navigation from '@/components/smart/Navigation/Navigation';

function NewPage() {
  return (
    <Box
      sx={{ fontSize: '3rem', fontWeight: '900' }}
      px={{ xl: '15%', lg: '15%', md: '10%', sm: '5%', xs: '5%' }}
    >
      MEOWWWWW
    </Box>
  );
}

export default Navigation(NewPage);
