import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

const Footer = () => { 
  
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} color='secondary'>
      <Container>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box>
            <Typography variant="body2" color="text.primary" align="center">
              &copy; 2022 Geek Software GmbH — WE love PDF
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
