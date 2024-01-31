// Gallery.js

import React from 'react';
import {AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Gallery.css';


const Appbar = () => {
  
  return (
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#5DADE2', color: 'white', gap:'20px'}}>
          <Button color="inherit" component={Link} to="/">
            Paldex
          </Button>
          <Button color="inherit" component={Link} to="/other-page">
            Guide
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default Appbar;
