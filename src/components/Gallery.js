// Gallery.js

import React, { useState } from 'react';
import { Container, Grid, Modal, Paper, Typography, IconButton, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear'; // Use ClearIcon instead of CloseIcon
import './Gallery.css';

const Gallery = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const pictureData = [
    { id: 1, src: 'picture1.jpg', info: 'Information about Picture 1' },
    { id: 2, src: 'picture2.jpg', info: 'Information about Picture 2' },
    // Add more picture data as needed
  ];

  const handlePictureClick = (id) => {
    const selectedPicture = pictureData.find((picture) => picture.id === id);
    setSelectedInfo(selectedPicture.info);
  };

  const handleCloseModal = () => {
    setSelectedInfo(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: 'green', color: 'white' }}>
          <Typography variant="h6" component={Link} to="/">
            Palworld
          </Typography>
          <Button color="inherit" component={Link} to="/other-page">
            Other Page
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Palworld Gallery
        </Typography>
        <Grid container spacing={2}>
          {pictureData.map((picture) => (
            <Grid key={picture.id} item xs={6} sm={4} md={3} lg={2}>
              <Paper className="thumbnail-container">
                <img
                  src={picture.src}
                  alt={`Picture ${picture.id}`}
                  onClick={() => handlePictureClick(picture.id)}
                  style={{ cursor: 'pointer', width: '100%' }}
                />
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
              style={{ position: 'absolute', top: 0, right: 0 }}
            >
              <ClearIcon />
            </IconButton>
            <Typography variant="h5" gutterBottom>
              Selected Information
            </Typography>
            <Typography>{selectedInfo}</Typography>
          </Paper>
        </Modal>
      </Container>
    </div>
  );
};

export default Gallery;
