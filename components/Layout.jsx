import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';
import Cart from './shop/Cart';
import { useRef } from 'react';
import { Satisfy, Nunito } from '@next/font/google';

const sat = Satisfy({
  weight: '400',
  variable: '--font-sat',
});

const crim = Nunito({
  weight: '400',
  variable: '--font-crim',
});

export default function Layout({ children }) {
  const mainRef = useRef(null);
  return (
    <>
      <Head>
        <title>Herbs R Us - Your One-Stop Shop for All Things Herbal</title>
        <meta
          name="description"
          content="Welcome to the website for Herbs R Us, the premier online destination for all your herbal needs. Our mission is to bring you the finest selection of natural herbs and supplements, so you can live a healthier and more vibrant life."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <NavBar reference={mainRef} />
      <main className={`${crim.variable} font-serif ${sat.variable} font-sans`}>
        {children}
        <Cart />
      </main>
      <Footer
        ref={mainRef}
        className={`${crim.variable} font-serif ${sat.variable} font-sans`}
      />
    </>
  );
}
