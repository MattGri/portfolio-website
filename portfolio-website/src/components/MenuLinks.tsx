import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { Close } from '@mui/icons-material';

const MenuLinks = () => {
  return (
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
  );
};

export default MenuLinks;
