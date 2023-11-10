import React from 'react';
import { Box, CardMedia, Typography, Button } from '@mui/material';
import styles from './standardPage.module.css';
import defaultPadding from '@/styles/defaultPadding';
import PropTypes from 'prop-types';

function StandardPage({
  image,
  imageAlt,
  title,
  price,
  description,
  parameters,
}) {
  return (
    <Box
      className={styles.pageContainer}
      px={{ ...defaultPadding, xs: '0%' }}
      pt={{ xs: 0, sm: '1.5rem' }}
      backgroundColor='white'
    >
      <Box
        className={styles.contentContainer}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          columnGap: { sm: '1rem', md: '2rem' },
        }}
      >
        <CardMedia
          component='img'
          src={image}
          alt={imageAlt}
          sx={{
            width: { xs: '100%', sm: 'auto' },
            height: { xs: 'auto', sm: '30rem', md: '35rem', lg: '40rem' },
          }}
        />
        <Box
          className={styles.textContainer}
          px={{ xs: '0.5rem', sm: '0.5rem', md: '0' }}
          pt={{ xs: '0.8rem', sm: '0.8rem', md: '1.8rem' }}
        >
          <Typography className={styles.title}>{title}</Typography>
          {price && (
            <Typography className={styles.price} component='a' href='/pricing'>
              {price}
            </Typography>
          )}
          {description && (
            <Typography className={styles.description}>
              {description}
            </Typography>
          )}
          <Box className={styles.parametersContainer}>
            {parameters.map((item) => (
              <Typography className={styles.parameter} key={item.id}>
                {item.id != 1 &&
                  `${item.text.length <= 50 ? '○' : ''} ${item.text}`}
              </Typography>
            ))}
          </Box>
          <Button
            className={styles.button}
            variant='contained'
            size='large'
            href={`/pricing`}
          >
            Purchase
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default StandardPage;

StandardPage.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  description: PropTypes.string,
  parameters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      bulleted: PropTypes.bool,
    }),
  ).isRequired,
};
