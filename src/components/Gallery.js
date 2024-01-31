import React, { useState } from 'react';
import { Container, Grid, Modal, Paper, Typography, IconButton, AppBar, Toolbar, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear'; // Use ClearIcon instead of CloseIcon
import './Gallery.css';
import {pictures} from './Palpictures'
import Appbar from './Appbar';
import bg from '../pictures/bg.png'

const Gallery = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const pictureData = [
    { id: 1, src: pictures.liftmunk, info: 'Lifmunk' , name:'Lifmunk' },
    { id: 2, src: pictures.cattiva, info: 'cattiva', name:'cattiva'  },
    { id: 3, src: pictures.lamball, info: 'lamball', name:'lamball'  },
    { id: 4, src: pictures.chikipi, info: 'chikipi', name:'chikipi'  },
  ];

  const handlePictureClick = (id) => {
    const selectedPicture = pictureData.find((picture) => picture.id === id);
    setSelectedInfo(selectedPicture.info);
  };

  const handleCloseModal = () => {
    setSelectedInfo(null);
  };

  return (
    <div className="divTag" style={{backgroundImage:`url(${bg})`}}>
      <Appbar/>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Paldex
        </Typography>
        <Grid container spacing={2}>
          {pictureData.map((picture) => (
            <Grid key={picture.id} item xs={6} sm={4} md={3} lg={2}>
              <Paper className="thumbnail-container" onClick={() => handlePictureClick(picture.id)} style={{cursor: 'pointer', textAlign:'center', display:'flex', flexDirection:'column'}}>
                <img
                  src={picture.src}
                  alt={`Picture ${picture.id}`}
                />
                {picture.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Modal open={Boolean(selectedInfo)} onClose={handleCloseModal}>
          <Paper className="modal-content">
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCloseModal}
              style={{ position: 'absolute', top: 0, right: '15px' }}
            >
              <ClearIcon />
            </IconButton>
            <Typography variant="h5" gutterBottom>

            </Typography>
            <Typography>{selectedInfo}</Typography>
          </Paper>
        </Modal>
      </Container>
    </div>
  );
};

export default Gallery;
