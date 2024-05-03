import { AppBar, Toolbar, Typography, Box, Container, Stack } from '@mui/material';
import { useState } from 'react';

const Footer = () => {

  const services = [
    'Merge PDF', 'Split PDF', 'Compress PDF', 'Edit PDF', 'Sign PDF', 'PDF Converter', 
    'Convert to PDF', 'Images to PDF', 'PDF to Images', 'Extract PDF Images', 'Protect PDF', 
    'Unlock PDF', 'Rotate PDF pages', 'Remove PDF pages', 'Extract PDF pages', 'Sort PDF pages', 
    'Webpage to PDF', 'Create PDF job application', 'Create PDF with camera', 'PDF OCR', 'Add watermark', 
    'Add page numbers', 'View as PDF', 'PDF Overlay', 'Compare PDFs', 'Web optimize PDF', 'Annotate PDF', 
    'Redact PDF', 'Create PDF', 'PDF 24 Creator', 'PDF Printer', 'PDF Reader', 'Create invoice', 
    'Remove PDF metadata', 'Flatten PDF', 'Crop PDF'
  ]

  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} color='secondary'>
      <Container>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Stack direction={'row'}>
            <Box
              borderRight={1}
              borderColor={'secondary.main'}
            >
              
            </Box>
          </Stack>
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
