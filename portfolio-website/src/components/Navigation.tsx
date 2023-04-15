import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import { Menu, Clear } from '@mui/icons-material';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
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
          mt: '35px',
        }}
      >
        <Box>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              color: 'primary.main',
            }}
          >
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
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <NavLink
                  to="/"
                  className="activeLink"
                  onClick={handleMenuClose}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/projects"
                  className="activeLink"
                  onClick={handleMenuClose}
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className="activeLink"
                  onClick={handleMenuClose}
                >
                  Contact
                </NavLink>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
