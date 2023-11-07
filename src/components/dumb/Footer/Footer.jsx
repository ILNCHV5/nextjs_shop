import React from 'react';
import { Box, Typography } from '@mui/material';
import { menuItems } from '../../smart/Navigation/navigation.json';
import styles from './Footer.module.css';
import defaultPadding from '@/styles/defaultPadding';

export function Footer() {
  return (
    <Box className={styles.footerContainer} px={defaultPadding}>
      <Box className={styles.insideContainer}>
        {menuItems.map(
          (item) =>
            item.id <= 3 &&
            (item.dropdownItems ? (
              <Box className={styles.column} key={item.id}>
                <Typography
                  className={styles.columnHeading}
                  component={item.href ? 'a' : 'p'}
                  href={item.href}
                >
                  {item.name}
                </Typography>
                {item.dropdownItems.map((dropdownItem) => (
                  <Typography
                    className={styles.rows}
                    component='a'
                    href={dropdownItem.href}
                    key={dropdownItem.id}
                  >
                    {dropdownItem.name}
                  </Typography>
                ))}
              </Box>
            ) : (
              <Box className={styles.column} key={item.id}>
                {menuItems.map(
                  (item) =>
                    !item.dropdownItems && (
                      <Typography
                        className={styles.columnHeading}
                        component='a'
                        href={item.href}
                        key={item.id}
                      >
                        {item.name}
                      </Typography>
                    ),
                )}
              </Box>
            )),
        )}
      </Box>
    </Box>
  );
}

export default Footer;
