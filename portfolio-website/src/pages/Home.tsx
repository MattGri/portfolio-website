import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);


  return (
    <motion.div
      initial={{
        x: -300,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <Box
        sx={{
          marginLeft: {
            xs: '0px',
            sm: '125px',
          },
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: {
              xs: 'center',
              sm: 'flex-start',
            },
            gap: '20px',
            m: '165px auto 20px',
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: 'primary.main',
              fontSize: {
                xs: '30px',
                sm: '50px',
              },
            }}
          >
            Mateusz
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: 'custom.main',
              fontSize: {
                xs: '30px',
                sm: '50px',
              },
            }}
          >
            Grzybowski
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: {
              xs: 'center',
              sm: 'flex-start',
            },
            gap: '10px',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: 'custom.main',
              fontSize: {
                xs: '20px',
                sm: '25px',
              },
            }}
          >
            Junior
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: 'primary.main',
              fontSize: {
                xs: '20px',
                sm: '25px',
              },
            }}
          >
            Frontend Developer
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Home;
