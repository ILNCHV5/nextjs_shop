import React from 'react';
import { Box, Typography } from '@mui/material';
import Navigation from '@/components/smart/Navigation/Navigation';
import defaultPadding from '@/styles/defaultPadding';
import pricingCards from './pricing.json';
import PricingCard from '@/components/smart/PricingCard/PricingCard';

function Pricing() {
  return (
    <Box px={defaultPadding} pb='4rem' backgroundColor='white'>
      {pricingCards.sections.map((section) => (
        <Box>
          <Typography
            sx={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
              paddingTop: '3rem',
              paddingBottom: '3rem',
            }}
          >
            {section.name}
          </Typography>
          <Box
            key={section.id}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              rowGap: '4rem',
              columnGap: { sm: '1.5rem', md: '4rem', lg: '3rem', xl: '1.5rem' },
            }}
          >
            {section.cards.map((card) => (
              <PricingCard
                key={card.id}
                cardContent={card}
                colors={pricingCards.colors[section.id % 2 === 0 ? 1 : 0]}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Navigation(Pricing);
