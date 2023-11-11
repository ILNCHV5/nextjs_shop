import { React } from 'react';
import { Slider, Button, Box, Typography } from '@mui/material';
import styles from './PricingCardBasic.module.css';
import PropTypes from 'prop-types';

function PricingCardBasic({
  price,
  taxStatus,
  sliderValue,
  sliderMarks,
  handleSliderChange,
  handleMouseUp,
  buttonText,
  colors,
}) {
  return (
    <Box className={styles.cardBox}>
      <Box
        className={styles.priceCard}
        sx={{
          backgroundColor: colors.background,
        }}
        p={0}
        height='16rem'
      >
        <Box className={styles.mainCardText}>
          <Typography className={styles.price}>{price}</Typography>
          <Typography className={styles.taxStatus}>{taxStatus}</Typography>
        </Box>
        <Slider
          value={sliderValue}
          step={1}
          marks={sliderMarks}
          onChange={handleSliderChange || (() => {})}
          onMouseUp={handleMouseUp || (() => {})}
          onTouchEnd={handleMouseUp || (() => {})}
          disabled={sliderMarks.length === 1}
          mb='1.5rem'
          sx={{
            width: '70%',
            '& .MuiSlider-rail': {
              height: 12,
              backgroundColor: colors.sliderRail,
              borderRadius: 6,
              width: '110%',
              marginLeft: '-0.3rem',
            },
            '& .MuiSlider-track': {
              height: 0,
              color: 'transparent',
            },
            '& .MuiSlider-thumb': {
              height: 25,
              width: 25,
              backgroundColor: colors.sliderThumb,
              boxShadow: 'none',
              display:
                sliderMarks && sliderMarks.length === 1 ? 'none' : 'block',
            },
            '& .MuiSlider-mark': {
              backgroundColor: colors.sliderMark,
              width: 6,
              height: 6,
              borderRadius: '50%',
            },
          }}
        />
      </Box>
      <Button
        variant='contained'
        size='medium'
        href={`/contacts`}
        className={styles.button}
        sx={{
          background: colors.button,
          '&:hover': { background: colors.id === 1 ? 'black' : '#37b34a' },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
export default PricingCardBasic;

PricingCardBasic.propTypes = {
  price: PropTypes.string.isRequired,
  taxStatus: PropTypes.string.isRequired,
  sliderValue: PropTypes.number.isRequired,
  sliderMarks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleSliderChange: PropTypes.func.isRequired,
  handleMouseUp: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    id: PropTypes.number.isRequired,
    background: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    sliderThumb: PropTypes.string.isRequired,
    sliderRail: PropTypes.string.isRequired,
    sliderMark: PropTypes.string.isRequired,
  }).isRequired,
};
