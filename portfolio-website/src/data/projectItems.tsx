import photosnap from '../assets/photosnap.png';
import countries from '../assets/countries.png';
import speech from '../assets/speech-recognition.png';
import blog from '../assets/blog.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ImageListItem, ImageListItemBar } from '@mui/material';

const ProjectItems = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.5,
          },
        }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
        }}
      >
        <Link
          to="https://photosnap-website-project.netlify.app/"
          target="_blank"
          style={{
            textDecoration: 'none',
          }}
        >
          <ImageListItem>
            <img
              src={photosnap}
              alt={t('PhotographyWebsite')}
              style={{
                width: '250px',
                height: '200px',
              }}
            />
            <ImageListItemBar
              title={t('PhotographyWebsite')}
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
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.5,
          },
        }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
        }}
      >
        <Link
          to="https://countries-app-project.netlify.app/"
          target="_blank"
          style={{
            textDecoration: 'none',
          }}
        >
          <ImageListItem>
            <img
              src={countries}
              alt={t('CountriesApp')}
              style={{
                width: '250px',
                height: '200px',
              }}
            />
            <ImageListItemBar
              title={t('CountriesApp')}
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
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.5,
          },
        }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
        }}
      >
        <Link
          to="https://speech-recognition-app-project.netlify.app/"
          target="_blank"
          style={{
            textDecoration: 'none',
          }}
        >
          <ImageListItem>
            <img
              src={speech}
              alt={t('SpeechRecognition')}
              style={{
                width: '250px',
                height: '200px',
              }}
            />
            <ImageListItemBar
              title={t('SpeechRecognition')}
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
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.5,
          },
        }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
        }}
      >
        <Link
          to="https://blog-website-project-app.netlify.app/"
          target="_blank"
          style={{
            textDecoration: 'none',
          }}
        >
          <ImageListItem>
            <img
              src={blog}
              alt={t('BlogWebsite')}
              style={{
                width: '250px',
                height: '200px',
              }}
            />
            <ImageListItemBar
              title={t('BlogWebsite')}
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
    </>
  );
};

export default ProjectItems;
