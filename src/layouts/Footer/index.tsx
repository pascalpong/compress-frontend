import { AppBar, Toolbar, Typography, Box, Container, Stack } from '@mui/material';
import { useState } from 'react';

const Footer = () => {


  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} color='secondary'>
      <Container>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box>
            <Typography variant="body2" color="textSecondary" align="center">
              &copy; 2022 Geek Software GmbH — WE love PDF
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
