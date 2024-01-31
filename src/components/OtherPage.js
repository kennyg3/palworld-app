// OtherPage.js

import React from 'react';
import { Container, Toolbar, Typography , Button } from '@mui/material';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div>
        <Toolbar style={{ backgroundColor: 'green', color: 'white' }}>
          <Typography variant="h6" component={Link} to="/">
            Palworld
          </Typography>
          <Button color="inherit" component={Link} to="/other-page">
            Other Page
          </Button>
        </Toolbar>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Content for Other Page
        </Typography>
        {/* Add the content for your Other Page here */}
      </Container>
    </div>
  );
};

export default OtherPage;
