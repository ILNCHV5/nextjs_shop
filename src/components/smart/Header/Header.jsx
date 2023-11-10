import React, { useState } from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import menuItems from './header.json';
import styles from './header.module.css';
import defaultPadding from '@/styles/defaultPadding';

function Header() {
  const [menuOneState, setMenuOneState] = useState(false);
  const [menuTwoState, setMenuTwoState] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenuOpen = (dropdownName) => {
    dropdownName.includes('One')
      ? setMenuOneState(true)
      : setMenuTwoState(true);
  };

  const handleMenuClose = (dropdownName) => {
    dropdownName.includes('One')
      ? setMenuOneState(false)
      : setMenuTwoState(false);
  };

  function targetMenuState(menuId) {
    return menuId.includes('One') ? menuOneState : menuTwoState;
  }

  const handleMobileMenuOpen = () => {
    setMobileMenu(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenu(false);
  };

  return (
    <Box>
      <Box className={styles.headerContainer} px={defaultPadding}>
        <Box component='a' href='/'>
          <CardMedia
            component='img'
            alt='logo'
            src='../images/logo/website_logo.svg'
            style={{
              height: '2.4rem',
              width: 'auto',
              cursor: 'pointer',
            }}
          />
        </Box>
        <Box
          className='linksContainer'
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            flexDirection: 'row',
            columnGap: '1.1rem',
          }}
        >
          {menuItems.map((item) => {
            if (item.dropdownItems) {
              return (
                <Box key={item.id}>
                  <Typography
                    className={styles.headerText}
                    color='black'
                    style={{ cursor: 'pointer' }}
                    pr='1.2rem'
                    onMouseOver={() => handleMenuOpen(item.menuId)}
                    onMouseLeave={() => handleMenuClose(item.menuId)}
                  >
                    {item.name}
                    <ArrowDropDownIcon
                      style={{
                        transform: `translateX(4.4rem)`,
                        position: 'absolute',
                      }}
                    />
                  </Typography>
                  <Box
                    onMouseOver={() => handleMenuOpen(item.menuId)}
                    onMouseLeave={() => handleMenuClose(item.menuId)}
                    sx={{
                      position: 'absolute',
                      display: targetMenuState(item.menuId) ? 'flex' : 'none',
                      flexDirection: 'column',
                      borderRadius: '0.4rem',
                      overflow: 'hidden',
                      marginLeft: '-1.3rem',
                    }}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <Box
                        key={dropdownItem.id}
                        component='a'
                        href={dropdownItem.href}
                        className={styles.dropdownItemBox}
                        height='2.7rem'
                        px='1.3rem'
                        sx={{
                          backgroundColor: '#ededed',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Typography className={styles.dropdownItem}>
                          {dropdownItem.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              );
            } else if (!item.name.includes('Home')) {
              return (
                <Typography
                  key={item.id}
                  className={styles.headerText}
                  component='a'
                  href={item.href}
                  color='black'
                >
                  {item.name}
                </Typography>
              );
            }
          })}
        </Box>
        <MenuIcon
          onClick={mobileMenu ? handleMobileMenuClose : handleMobileMenuOpen}
          sx={{
            color: 'black',
            display: { xs: 'flex', sm: 'flex', md: 'none' },
            cursor: 'pointer',
          }}
        />
        <Box
          className={styles.mobileMenuContainer}
          sx={{
            display: mobileMenu
              ? { xs: 'flex', sm: 'flex', md: 'none' }
              : 'none',
          }}
        >
          {menuItems.map((item) => (
            <Box key={item.id}>
              <Box
                className={styles.mobileDropdownItemBox}
                component='a'
                onClick={
                  item.menuId && targetMenuState(item.menuId)
                    ? () => handleMenuClose(item.menuId)
                    : () => handleMenuOpen(item.menuId)
                }
                href={item.href}
                pr={{ sm: '6.6vw', xs: '6.6vw' }}
                pl={{ sm: '6.6vw', xs: '13vw' }}
              >
                <Typography
                  className={styles.dropdownItem}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {item.name}
                </Typography>
              </Box>
              {item.dropdownItems &&
                targetMenuState(item.menuId) &&
                item.dropdownItems.map((dropdownItem) => (
                  <Box
                    className={styles.mobileDropdownNestedItemBox}
                    key={dropdownItem.id}
                    component='a'
                    href={dropdownItem.href}
                    pr={{ sm: '8.6vw', xs: '8.6vw' }}
                    pl={{ sm: '6.6vw', xs: '13vw' }}
                    backgroundColor={
                      dropdownItem.id % 2 == 0 ? '#75b97f' : '#37b34a'
                    }
                  >
                    <Typography className={styles.nestedDropdownItem}>
                      {dropdownItem.name}
                    </Typography>
                  </Box>
                ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
