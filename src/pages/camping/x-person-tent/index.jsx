import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import Navigation from '@/components/smart/Navigation/Navigation';
import pageInfo from './x-person-tent.json';
import styles from '../../page-styles.module.css';

function XPersonTent() {
  return (
    <Box
      sx={{ fontSize: '3rem', fontWeight: '900' }}
      px={{ xl: '15%', lg: '15%', md: '10%', sm: '5%', xs: '5%' }}
      py='1.5rem'
      backgroundColor='white'
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          columnGap: '2rem',
        }}
      >
        <CardMedia
          component='img'
          src={pageInfo.image}
          alt={pageInfo.imageAlt}
          style={{
            height: '27rem',
            width: 'auto',
          }}
        />
        <Box
          pt='2rem'
          px={{ xs: '0.5rem', sm: '0.5rem', md: '0' }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
            color: 'black',
          }}
        >
          <Typography className={styles.title}>{pageInfo.title}</Typography>
          <Typography>{pageInfo.price}</Typography>
          <Typography>{pageInfo.description}</Typography>
          {pageInfo.properties && (
            <Box>
              {pageInfo.properties.map((item) => (
                <Typography key={item.id}>{item.name}</Typography>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Navigation(XPersonTent);
