import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';
import { Roboto } from '@next/font/google';
import Cart from './shop/Cart';
import { useRef } from 'react';

const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto',
});

export default function Layout({ children }) {
  const mainRef = useRef(null);
  return (
    <>
      <Head>
        <title>Jump Around Inflatables</title>
        <meta
          name="description"
          content="This is the website for Jump Around Inflatables, we specialize in making you happy by delivering Moon Bounces, Slides, Games, Concessions or Hosting Princess Parties of your choice. We cater to birthday parties, picnics, carnivals, church and school fund raisers. Our priority is to provide excellent service as well as clean, safe, and fun products to make your event memorable."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <NavBar reference={mainRef} />
      <main className={`${roboto.variable} font-serif`}>
        {children}
        <Cart />
      </main>
      <Footer
        ref={mainRef}
        className={`${roboto.variable} font-serif`}
      />
    </>
  );
}
