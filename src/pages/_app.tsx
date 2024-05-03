import { useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import ColorModeContext from '@/ColorModeContext';
import { amber, deepOrange, grey } from '@mui/material/colors';
import Head from 'next/head';
import LowerHeader from '@/layouts/Header/LowerHeader';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: any) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(() => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }), [],
  );

  const theme = useMemo(() => createTheme({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              primary: {
                main: '#327FDE',
              },
              secondary: {
                main: '#EFF6FF'
              },
              divider: amber[200],
              text: {
                primary: grey[900],
                secondary: grey[800],
              },
              button: {
                primary: grey[900],
              }
            }
          : {
              primary: deepOrange,
              divider: deepOrange[700],
              background: {
                default: deepOrange[900],
                paper: deepOrange[900],
              },
              text: {
                primary: '#fff',
                secondary: grey[500],
              },
              button: {
                primary: grey[900],
              }
            }),
      },
      typography: {
        fontFamily: '"Istok Web", sans-serif',
        allVariants: {
          textTransform: 'none', // Set textTransform to none for all Typography components
        },
        h1: {
          fontSize: '36px',
          fontWeight: 700, 
        },
        h2: {
          fontSize: '28px', // Customize the font size for heading level 2
          fontWeight: 700,
        },
      },
    }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <CssBaseline />
        <Header />
        <LowerHeader/>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;