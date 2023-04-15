import React, { useEffect } from 'react';
import {
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import photosnap from '../assets/photosnap.png';
import countries from '../assets/countries.png';
import weather from '../assets/weather.png';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects';
  }, []);

  return (
    <>
      <motion.div
        animate={{
          scale: [2, 1],
          rotate: [90, 0],
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
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
          Projects
        </Typography>

        <ImageList
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
          cols={3}
        >
          <Link
            to="https://thunderous-florentine-0c5cb2.netlify.app/"
            target="_blank"
            style={{
              textDecoration: 'none',
            }}
          >
            <ImageListItem>
              <img
                src={photosnap}
                alt="Photosnap website"
                style={{
                  width: '300px',
                }}
              />
              <ImageListItemBar
                title="Photography website"
                position="below"
                sx={{
                  color: 'primary.main',
                  marginTop: '10px',
                  textAlign: 'center',
                }}
              />
            </ImageListItem>
          </Link>
          <Link
            to="https://tiny-starship-51b4a5.netlify.app/"
            target="_blank"
            style={{
              textDecoration: 'none',
            }}
          >
            <ImageListItem>
              <img
                src={countries}
                alt="Countries App"
                style={{
                  width: '300px',
                }}
              />
              <ImageListItemBar
                title="Countries App"
                position="below"
                sx={{
                  color: 'primary.main',
                  textAlign: 'center',
                  marginTop: '10px',
                }}
              />
            </ImageListItem>
          </Link>

          <Link
            to="https://bright-strudel-e60cdd.netlify.app/"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <ImageListItem>
              <img
                src={weather}
                alt="Weather App"
                style={{
                  width: '300px',
                }}
              />
              <ImageListItemBar
                title="Weather App"
                position="below"
                sx={{
                  color: 'primary.main',
                  textAlign: 'center',
                }}
              />
            </ImageListItem>
          </Link>
        </ImageList>
      </motion.div>
    </>
  );
};

export default Projects;
