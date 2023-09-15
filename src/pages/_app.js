import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/favicon/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
