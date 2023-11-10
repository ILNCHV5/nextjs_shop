import React from 'react';
import { Box } from '@mui/material';
import Header from '@/components/smart/Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

function Navigation(WrappedComponent) {
  return function (props) {
    return (
      <Box>
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </Box>
    );
  };
}
export default Navigation;
