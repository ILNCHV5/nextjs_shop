import React, { useState } from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '@/components/dumb/Footer/Footer';
import { menuItems } from './navigation.json';
import styles from './navigation.module.css';

function Navigation(WrappedComponent) {
  return function (props) {
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
        <Box
          className={styles.headerContainer}
          px={{ xl: '15%', lg: '15%', md: '10%', sm: '5%', xs: '5%' }}
        >
          <Box component='a' href='/'>
            <CardMedia
              component='img'
              alt='logo'
              src='../images/logo/website_logo.svg'
              style={{
                height: '2rem',
                width: 'auto',
                paddingLeft: '0.2rem',
                cursor: 'pointer',
              }}
            />
          </Box>
          <Box
            className='linksContainer'
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              flexDirection: 'row',
              columnGap: '1.2rem',
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
                      pr='0.9rem'
                      onMouseOver={() => handleMenuOpen(item.menuId)}
                      onMouseLeave={() => handleMenuClose(item.menuId)}
                    >
                      {item.name}
                      <ArrowDropDownIcon
                        style={{
                          transform: `translateX(3.4rem)`,
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
                        borderRadius: '0.3rem',
                        overflow: 'hidden',
                        marginLeft: '-1rem',
                      }}
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <Box
                          key={dropdownItem.id}
                          component='a'
                          href={dropdownItem.href}
                          className={styles.dropdownItemBox}
                          height='2rem'
                          px='1rem'
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
              } else {
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
          {/* mobile dropdowns  */}
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
              <Box>
                <Box
                  className={styles.mobileDropdownItemBox}
                  key={item.id}
                  component='a'
                  onClick={
                    item.menuId && targetMenuState(item.menuId)
                      ? () => handleMenuClose(item.menuId)
                      : () => handleMenuOpen(item.menuId)
                  }
                  href={item.href}
                  pr={{ sm: '5vw', xs: '5vw' }}
                  pl={{ sm: '5vw', xs: '10vw' }}
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
                      pr={{ sm: '6.5vw', xs: '6.5vw' }}
                      pl={{ sm: '5vw', xs: '10vw' }}
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
          {/* mobile end */}
        </Box>
        <WrappedComponent {...props} />
        <Footer />
      </Box>
    );
  };
}
export default Navigation;
