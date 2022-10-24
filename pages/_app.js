import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const theme1 = {
  colors: {
    primary: 'blue',
  },
};

const theme2 = {
  colors: {
    primary: 'red',
  },
};

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(theme1);
  return (
    <ThemeProvider theme={theme}>
      <button onClick={() => setTheme(theme1)}>Theme1</button>
      <button onClick={() => setTheme(theme2)}>Theme2</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
