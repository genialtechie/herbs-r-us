import React from 'react';
import { Kaushan_Script } from '@next/font/google';
import { Roboto } from '@next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import logo from '../public/logo.png';
import MobileNav from './MobileNav';

const ShoppingCart = dynamic(() => import('./ShoppingCart'), { ssr: false });

const zen = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zen',
});

const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto',
});

const NavBar = ({ reference }) => {
  function handleClick() {
    reference.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <nav className="w-full text-white h-fit bg-custom-theme flex flex-col lg:flex-row lg:justify-around items-center">
      <MobileNav handleRef={handleClick} />

      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          height={110}
          width={150}
          className="cursor-pointer hidden lg:block lg:scale-125 lg:scale-x-150 lg:my-10 ml-2"
        />
      </Link>
      <ul
        className={`hidden lg:flex flex-row h-fit w-2/5 justify-around items-center text-xl ${roboto.variable} font-serif`}
      >
        <li className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-gray cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-gray cursor-pointer">
          <Link href="/products?category=all">Shop</Link>
        </li>
        <li
          onClick={handleClick}
          className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-gray cursor-pointer"
        >
          Contact
        </li>
        <li
          onClick={handleClick}
          className=" h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-gray cursor-pointer"
        >
          Get a Quote
        </li>
        <ShoppingCart />
      </ul>
    </nav>
  );
};

export default NavBar;
