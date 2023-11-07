import React from 'react';
import { Box, Typography } from '@mui/material';
import defaultPadding from '@/styles/defaultPadding';
import { Fade } from 'react-reveal';
import styles from './HomepagePanel.module.css';

function HomepagePanel({ backgroundImage, textAlign, title, subTitle, href }) {
  return (
    <Box className={styles.overflowContainer}>
      <Box
        className={styles.contentContainer}
        px={defaultPadding}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          textAlign: textAlign,
        }}
      >
        <Fade bottom>
          <Box component={href ? 'a' : 'div'} href={href}>
            <Typography
              className={styles.title}
              sx={{
                fontSize: { xs: '3rem', sm: '5rem', md: '6rem' },
                lineHeight: { xs: '2.7rem', sm: '4.5rem', md: '6rem' },
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: '1rem', sm: '1.3rem', md: '2rem' } }}
            >
              {subTitle}
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}

export default HomepagePanel;
