import React from 'react';

const ColorModeContext = React.createContext({
  toggleColorMode: () => {}, // default toggleColorMode function
});

export default ColorModeContext;