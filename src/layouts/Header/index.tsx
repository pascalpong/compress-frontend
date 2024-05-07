import { AppBar, Typography, IconButton, Stack, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react'; 
import ColorModeContext from '@/ColorModeContext';

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const toggleDarkMode = () => {
    colorMode.toggleColorMode();
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1000 }} color='secondary'>
      <Container>
        <Stack
          sx={{ width: '100%' }} 
          spacing={{ xs: 1, sm: 2 }}
          marginY={4}
          direction="row" 
          useFlexGap 
          flexWrap="wrap" 
          justifyContent={'space-between'} 
          alignItems={'center'}
        >
          <Typography 
            variant="h1" 
            component="div" 
            sx={{ flexGrow: 1 }}
          > 
            PDF24 <span style={{ color:'#327FDE', fontWeight:400 }}> Tools </span> 
          </Typography>
          <Stack 
            spacing={{ xs: 1, sm: 2 }} 
            direction="row" 
            justifyContent={'space-between'} 
            alignItems={'center'}
          >
            <Button href="#text-buttons"><Typography color='button.primary'>Desktop Version</Typography></Button>
            <Button href="#text-buttons"><Typography color='button.primary'>Contact</Typography></Button>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <DarkModeIcon />}
            </IconButton>
            <Button variant="contained" color='primary'>All PDF Tools</Button>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;