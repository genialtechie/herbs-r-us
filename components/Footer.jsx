import React, { forwardRef } from 'react';
import Image from 'next/image';

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className={
        props.className +
        ' ' +
        `font-sans w-full py-10 px-10 lg:py-16 h-fit bg-black text-white flex flex-col lg:flex-row justify-around text-sm`
      }
    >
      <div className="w-fit mb-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer mb-7"
        />
        <p className="mb-3">Herbs R Us is headquartered in Atlanta, GA, USA</p>
        <p>&copy; Herbs R Us 2023</p>
      </div>
      <div className="grid grid-cols-1 auto-cols-max lg:grid-rows-1 lg:grid-cols-3 gap-y-10 lg:gap-5">
        <div>
          <div className="w-fit text-gray-400 mb-3">Quick Links</div>
          <ul className="mb-2">
            <li className="mb-1">
              <a
                className="cursor-pointer transition-all duration-300 hover:text-theme"
                href="#header"
              >
                Header
              </a>
            </li>
            <li className="mb-1">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-theme"
                href="#our-products"
              >
                Our Products
              </a>
            </li>
            <li className="mb-1">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-theme"
                href="#reviews"
              >
                Reviews
              </a>
            </li>
            <li className="mb-1">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-theme"
                href="#stay-healthy"
              >
                Stay Healthy
              </a>
            </li>
            <li className="mb-1">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-theme"
                href="#faqs"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="w-fit text-gray-400 mb-3">Find Us</div>
          <ul className="mb-2">
            <li className="mb-1">
              <a
                className="cursor-pointer transition-all duration-300 hover:text-theme"
                href="http://instagram.com/herbsrus2020"
              >
                Instagram
              </a>
            </li>
            <li className="mb-1">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-theme"
                href="mailto:herbs_r_us@yahoo.com"
              >
                herbs_r_us@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
