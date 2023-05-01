import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import { Menu, Clear } from '@mui/icons-material';
import MenuLinks from './MenuLinks';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'flex',
          },
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: '35px',
        }}
      >
        <Box
          sx={{
            color: 'primary.main',
          }}
        >
          <Typography variant="h5" component="h1">
            Mateusz Grzybowski
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <NavLink to="/" className="activeLink">
            Home
          </NavLink>
          <NavLink to="/projects" className="activeLink">
            Projects
          </NavLink>
          <NavLink to="/contact" className="activeLink">
            Contact
          </NavLink>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: 'flex',
            sm: 'none',
          },
        }}
      >
        <Box>
          <Menu
            sx={{
              color: 'primary.main',
              fontSize: '40px',
              cursor: 'pointer',
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
            onClick={handleMenuOpen}
          />
          {isMenuOpen && (
            <Box
              sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: '100',
              }}
            >
              <Clear
                sx={{
                  color: 'primary.main',
                  fontSize: '40px',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                }}
                onClick={handleMenuOpen}
              />
              <MenuLinks />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
