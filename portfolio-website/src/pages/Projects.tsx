import { useEffect } from 'react';
import {
  Typography,
  ImageList,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectItems from '../data/projectItems';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects';
  }, []);

  const { t } = useTranslation();

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
          {t('Projects')}
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
          <ProjectItems />
        </ImageList>
      </motion.div>
    </>
  );
};

export default Projects;
