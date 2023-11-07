import { React } from 'react';
import { Slider, Button, Box, Typography } from '@mui/material';
import styles from './PricingCardBasic.module.css';

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
        href={`/contact`}
        className={styles.button}
        sx={{
          background: colors.button,
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
export default PricingCardBasic;
