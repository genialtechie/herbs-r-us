import React, { useState } from 'react';
import menu from '../public/menu.svg';
import Image from 'next/image';
import Link from 'next/link';
import close from '../public/close.svg';
import dynamic from 'next/dynamic';
import logo from '../public/logo.png';

const ShoppingCart = dynamic(() => import('./ShoppingCart'), { ssr: false });

const MobileNav = ({ handleRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className="h-screen w-screen container bg-white fixed inset-x-0 inset-y-0 z-50 overflow-y-scoll">
          <div className="py-20 px-3 text-custom-gray">
            <Image
              src={close}
              alt="close"
              height={50}
              width={50}
              className="mx-auto cursor-pointer transition-all duration-200 ease-in-out hover:scale-125 text-custom-theme"
              onClick={() => setIsOpen(!isOpen)}
            />
            <ul className="h-fit container py-16 clear-right text-xl text-center">
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-theme cursor-pointer"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-theme cursor-pointer"
              >
                <Link href="/about">About Us</Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-theme cursor-pointer"
              >
                <Link href="/products?category=all">Shop</Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-theme cursor-pointer"
              >
                <a href="tel:+14045749184">Contact</a>
              </li>
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                  handleRef();
                }}
                className=" h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-theme cursor-pointer"
              >
                Get a Quote
              </li>
            </ul>
          </div>
          <div>
            <p className="text-center text-custom-gray text-md mb-5">
              © 2022 All Rights Reserved
            </p>
            <p className="text-center text-custom-gray text-md mb-5">
              Designed by{' '}
              <Link
                className="underline hover:text-custom-theme transition-all duration-200 ease-in-out"
                href="https://www.magpollo.com"
              >
                Magpollo
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between items-center lg:hidden my-2 w-11/12">
          <Image
            src={menu}
            alt="menu"
            height={60}
            width={60}
            className="scale-90 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer mx-3 h-fit"
            onClick={() => setIsOpen(!isOpen)}
          />
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              height={110}
              width={150}
              className="cursor-pointer"
            />
          </Link>
          <ShoppingCart />
        </div>
      )}
    </>
  );
};

export default MobileNav;
