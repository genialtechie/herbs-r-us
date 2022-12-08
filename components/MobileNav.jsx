import React, { useState } from 'react';
import menu from '../public/menu.svg';
import Image from 'next/image';
import Link from 'next/link';
import close from '../public/close.svg';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
                Contact
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
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
        <Image
          src={menu}
          alt="menu"
          height={60}
          width={60}
          className="hover:scale-110 lg:hidden mb-2 mt-10 transition-all duration-200 ease-in-out cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </div>
  );
};

export default MobileNav;
