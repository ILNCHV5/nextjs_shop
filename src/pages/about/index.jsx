import React from 'react';
import Navigation from '@/components/smart/Navigation/Navigation';
import StandardPage from '@/components/dumb/StandardPage/StandardPage';
import pageInfo from './about.json';

function About() {
  return (
    <StandardPage
      image={pageInfo.image}
      imageAlt={pageInfo.imageAlt}
      title={pageInfo.title}
      price={pageInfo.price}
      description={pageInfo.description}
      properties={pageInfo.properties}
    />
  );
}

export default Navigation(About);
