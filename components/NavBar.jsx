import React from 'react';
import { Kaushan_Script } from '@next/font/google';
import { Roboto } from '@next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Cart from '../public/shopping-cart.svg';
import MobileNav from './MobileNav';

const zen = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zen',
});

const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto',
});

const NavBar = () => {
  return (
    <nav className="w-full text-white h-fit bg-custom-theme flex flex-col lg:flex-row lg:justify-around items-center">
      <MobileNav />
      <h1
        className={`text-5xl ${zen.variable} font-sans py-5 text-center transition-all duration-200 ease-in-out hover:text-custom-gray`}
      >
        <Link href="/">
          Jump Around <br />
          Inflatables
        </Link>
      </h1>
      <ul
        className={`hidden lg:flex flex-row h-fit w-2/5 justify-around items-center text-xl ${roboto.variable} font-serif`}
      >
        <li className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-gray cursor-pointer">
          <Link href="/about">About Us</Link>
        </li>
        <li className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-gray cursor-pointer">
          <Link href="/products?category=all">Shop</Link>
        </li>
        <li className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-gray cursor-pointer">
          Contact
        </li>
        <li className=" h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-gray cursor-pointer">
          Get a Quote
        </li>
        <Image
          src={Cart}
          alt="cart"
          height={60}
          width={60}
          className="scale-50 hover:scale-75 transition-all duration-200 ease-in-out cursor-pointer"
        />
      </ul>
    </nav>
  );
};

export default NavBar;
