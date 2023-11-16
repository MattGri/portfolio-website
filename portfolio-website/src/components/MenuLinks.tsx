import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import Flag from 'react-flagkit';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const MenuLinks = () => {
  const { t } = useTranslation();

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
        {t('Home')}
      </NavLink>
      <NavLink to="/projects" className="activeLink">
        {t('Projects')}
      </NavLink>
      <NavLink to="/contact" className="activeLink">
        {t('Contact')}
      </NavLink>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Flag
          country="PL"
          size={25}
          className="flag"
          onClick={() => {
            i18n.changeLanguage('pl');
          }}
        />
        <Flag
          country="GB"
          size={25}
          className="flag"
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        />
      </Box>
    </Box>
  );
};

export default MenuLinks;
