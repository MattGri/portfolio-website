import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <motion.div
      initial={{
        scaleY: 0,
      }}
      animate={{
        scaleY: 1,
      }}
      exit={{
        scaleY: 0,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: 'primary.main',
          textAlign: 'center',
          marginBottom: '30px',
          marginTop: {
            xs: '60px',
          },
        }}
      >
        Contact
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: 'primary.main',
          textAlign: 'center',
          fontSize: {
            xs: '15px',
            sm: '25px',
          },
        }}
      >
        If you want to chat about a project - email me on
        <a
          href="mailto:mateusz.grzybowski98@gmail.com"
          style={{
            textDecoration: 'none',
            color: '#fdce72',
            marginLeft: '10px',
          }}
        >
          mateusz.grzybowski98@gmail.com
        </a>
      </Typography>
    </motion.div>
  );
};

export default Contact;
