import React, { useEffect } from 'react';
import {
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { imageListItems } from '../data/projectItems';

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
            overflow: 'hidden',
          }}
          cols={3}
        >
          {imageListItems.map(({ link, imageSrc, altText, title }) => (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <Link
                to={link}
                target="_blank"
                style={{
                  textDecoration: 'none',
                }}
              >
                <ImageListItem>
                  <img
                    src={imageSrc}
                    alt={altText}
                    style={{
                      width: '300px',
                    }}
                  />
                  <ImageListItemBar
                    title={title}
                    position="below"
                    sx={{
                      color: 'primary.main',
                      marginTop: '10px',
                      textAlign: 'center',
                    }}
                  />
                </ImageListItem>
              </Link>
            </motion.div>
          ))}
        </ImageList>
      </motion.div>
    </>
  );
};

export default Projects;
