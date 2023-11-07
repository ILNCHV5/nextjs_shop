import '@/styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme.js';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
