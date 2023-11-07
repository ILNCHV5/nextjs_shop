import { React, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './PricingCard.module.css';
import PricingCardBasic from '../../dumb/PricingCardBasic/PricingCardBasic';

function PricingCard({ cardContent, colors }) {
  const { cardName, href, taxStatus, buttonText, cardFlavors } = cardContent;
  const sliderMarks = cardFlavors.map((flavor) => ({
    value: flavor.value,
    label: flavor.flavorName,
  }));
  const [currentFlavor, setCurrentFlavor] = useState(
    sliderMarks.length > 2 ? cardFlavors[1] : cardFlavors[0],
  );
  const { flavorName, price, parameters } = currentFlavor;
  const [sliderValue, setSliderValue] = useState(
    sliderMarks.length > 2 ? 50 : 0,
  );

  useEffect(() => {
    const selectedFlavor = cardFlavors.find(
      (flavor) => flavor.value === sliderValue,
    );
    setCurrentFlavor(selectedFlavor || currentFlavor);
  }, [sliderValue, cardFlavors]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleMouseUp = () => {
    const snapValues = sliderMarks.map((mark) => mark.value);
    const newValue = snapValues.reduce((prev, current) =>
      Math.abs(current - sliderValue) < Math.abs(prev - sliderValue)
        ? current
        : prev,
    );
    setSliderValue(newValue);
  };

  return (
    <Box className={styles.card}>
      <Box height='19rem' className={styles.textBox}>
        <Typography component='a' href={href} className={styles.cardName}>
          {cardName}
        </Typography>
        <Typography mb={0.5} className={styles.flavorName}>
          {flavorName}
        </Typography>
        <Box
          component='ul'
          height='18rem'
          className={styles.description}
          sx={{
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: colors.button,
            },
          }}
        >
          {parameters.map((param) => (
            <Typography
              key={param.id}
              component={param.bulleted ? 'li' : 'p'}
              className={styles.descriptionItem}
              mb={0.7}
              sx={{
                marginLeft: param.bulleted ? '1rem' : '0',
              }}
            >
              {param.text}
            </Typography>
          ))}
          {href && (
            <Typography component='a' href={href} className={styles.readMore}>
              read more..
            </Typography>
          )}
        </Box>
      </Box>
      <PricingCardBasic
        price={price}
        taxStatus={taxStatus}
        sliderValue={sliderValue}
        sliderMarks={sliderMarks}
        handleSliderChange={handleSliderChange}
        handleMouseUp={handleMouseUp}
        buttonText={buttonText}
        colors={colors}
      />
    </Box>
  );
}
export default PricingCard;
