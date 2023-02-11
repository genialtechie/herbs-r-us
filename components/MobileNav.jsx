import React, { useState } from 'react';
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
          <div className="py-20 px-3">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              className="mx-auto cursor-pointer transition-all duration-200 ease-in-out hover:fill-theme"
              onClick={() => setIsOpen(!isOpen)}
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
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
                <Link href="/products?category=all">Shop</Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="h-fit px-5 py-2 rounded-sm transition-all duration-200 ease-in-out hover:text-custom-theme cursor-pointer"
              >
                <a href="tel:+14045749184">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-center text-custom-gray text-md mb-5">
              © 2023 All Rights Reserved
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
        <div className="flex flex-row justify-between items-center lg:hidden my-2 mx-auto w-11/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="40"
            height="30"
            fill="currentColor"
            className="hover:fill-theme cursor-pointer transition duration-200 ease-in-out"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z " />
          </svg>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              height={80}
              width={80}
              className="cursor-pointer scale-90 relative mx-auto inset-x-0"
            />
          </Link>
          <ShoppingCart />
        </div>
      )}
    </>
  );
};

export default MobileNav;
