import React from 'react';
import { Box, Typography } from '@mui/material';
import Navigation from '@/components/dumb/Navigation/Navigation';
import PricingCard from '@/components/smart/PricingCard/PricingCard';
import defaultPadding from '@/styles/defaultPadding';
import styles from './pricing.module.css';
import productInfo from '../../../public/productInfo/productInfo.json';

function Pricing() {
  return (
    <Box className={styles.sectionsContainer} px={defaultPadding}>
      {productInfo.sections.map((section) => (
        <Box className={styles.section} key={section.id}>
          <Typography className={styles.sectionTitle}>
            {section.name}
          </Typography>
          <Box
            className={styles.sectionContents}
            sx={{
              columnGap: { sm: '1.5rem', md: '4rem', lg: '3rem', xl: '1.5rem' },
            }}
          >
            {section.cards.map((card) => (
              <PricingCard
                key={card.id}
                cardContent={card}
                colors={productInfo.colors[section.id % 2 === 0 ? 1 : 0]}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Navigation(Pricing);
