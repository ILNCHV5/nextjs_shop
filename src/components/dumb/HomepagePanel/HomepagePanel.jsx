import React from 'react';
import { Box, Typography } from '@mui/material';
import defaultPadding from '@/styles/defaultPadding';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './HomepagePanel.module.css';
import PropTypes from 'prop-types';

function HomepagePanel({ backgroundImage, textAlign, title, subTitle, href }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -30% 0px',
  });

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
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
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
              className={styles.subTitle}
              sx={{ fontSize: { xs: '1rem', sm: '1.3rem', md: '2rem' } }}
            >
              {subTitle}
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HomepagePanel;

HomepagePanel.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
