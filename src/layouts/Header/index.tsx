import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
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
    <AppBar position="fixed" sx={{ zIndex: 1000 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box sx={{ color: 'white' }}>Next.js App</Box>
        </Typography>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {/* Add more navigation buttons or components here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;