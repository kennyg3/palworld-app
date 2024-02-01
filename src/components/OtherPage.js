// OtherPage.js

import React from 'react';
import { Container, Toolbar, Typography , Button } from '@mui/material';
import Appbar from './Appbar';

const OtherPage = () => {
  return (
    <div>
        <Appbar/>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Guide
        </Typography>
      </Container>
    </div>
  );
};

export default OtherPage;
