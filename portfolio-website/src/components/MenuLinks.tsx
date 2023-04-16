import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { Close } from '@mui/icons-material';

interface MenuLinksProps {
  onClose: () => void;
}

const MenuLinks = ({ onClose }: MenuLinksProps) => {
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
      <NavLink to="/" className="activeLink" onClick={onClose}>
        Home
      </NavLink>
      <NavLink to="/projects" className="activeLink" onClick={onClose}>
        Projects
      </NavLink>
      <NavLink to="/contact" className="activeLink" onClick={onClose}>
        Contact
      </NavLink>
    </Box>
  );
};

export default MenuLinks;
