import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import ColorModeContext from '@/ColorModeContext';

function MyApp({ Component, pageProps }: any) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;