import { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { LuGithub } from 'react-icons/lu';
import { CiLinkedin } from 'react-icons/ci';

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
            Front-End
            <span
              style={{
                color: '#fdce72',
              }}
            >
              {' '}
              React{' '}
            </span>
            Developer
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                color: 'primary.main',
                fontSize: {
                  xs: '20px',
                  sm: '23px',
                },
              }}
            >
              Hi, I'm Mateusz{' '}
              <span
                style={{
                  color: '#fdce72',
                }}
              >
                Grzybowski
              </span>
              .
            </Typography>
            <Box>
              <a
                href="https://www.linkedin.com/in/mateusz-grzybowski-1685a5183/"
                target="_blank"
              >
                <CiLinkedin className="redirectLink" />
              </a>
              <a href="https://github.com/MattGri" target="_blank">
                <LuGithub className="redirectLink" />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Home;
