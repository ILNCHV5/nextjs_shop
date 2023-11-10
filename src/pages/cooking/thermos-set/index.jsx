import React from 'react';
import Navigation from '@/components/dumb/Navigation/Navigation';
import StandardPage from '@/components/dumb/StandardPage/StandardPage';
import productInfo from '../../../../public/productInfo/productInfo.json';

function ThermosSet() {
  const { image, imageAlt, title, description, cardFlavors } =
    productInfo.sections[1].cards[5];
  const { price, parameters } = cardFlavors[cardFlavors.length > 2 ? 1 : 0];
  return (
    <StandardPage
      image={image}
      imageAlt={imageAlt}
      title={title}
      price={price}
      description={description}
      parameters={parameters}
    />
  );
}

export default Navigation(ThermosSet);
