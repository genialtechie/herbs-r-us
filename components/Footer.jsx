import React, { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import instagram from '../public/instagram.svg';
import facebook from '../public/facebook.svg';

const Footer = forwardRef((props, ref) => {
  return (
    <footer className="w-full h-fit text-black bg-[#edf2f4]  relative bottom-0 right-0 overflow-y-hidden">
      <h1 className="text-4xl px-5 lg:px-1 pt-10 lg:pt-24 lg:pb-14 font-bold text-center">
        We make us in <span className="text-custom-theme">happy customers</span>
      </h1>
      <div className="w-4/5 mx-auto p-5 my-5 flex flex-col lg:flex-row justify-around">
        <div className="mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="font-bold mb-3">We guide you to a succesful event</h1>
          <p className="mb-2 w-56 mx-auto lg:mx-0">
            We are a team of specialists, who love to challenge what we already
            know.
          </p>
          <div className="flex flex-row justify-center lg:justify-start">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/jumparoundinflatables_/"
            >
              <Image
                src={instagram}
                alt="instagram"
                width={50}
                height={50}
                className="mr-2 scale-90 hover:scale-100 transition-all duration-200 ease-in-out cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="font-bold mb-3">Contacts</h1>

          <p className="mb-2">
            <Link
              className="hover:text-custom-theme hover:scale-110 transition-all duration-200 ease-in-out"
              href="tel:+14045749184"
            >
              +1 (404) 574-9184
            </Link>
          </p>
          <p className="mb-2">
            <Link
              className="hover:text-custom-theme hover:scale-110 transition-all duration-200 ease-in-out"
              href="mailto:jumparoundinfl@yahoo.com"
            >
              jumparoundinfl@yahoo.com
            </Link>
          </p>
          <p className="mb-2">
            <a
              className="hover:text-custom-theme hover:scale-110 transition-all duration-200 ease-in-out"
              href="https://magpollo.com"
            >
              Built by Magpollo
            </a>
          </p>
          <p className="mb-2">&copy; 2022, Jump Around Inflatables</p>
        </div>
        <div
          ref={ref}
          className="mb-10 lg:mb-0 text-center lg:text-left"
        >
          <h1 className="font-bold mb-3">Get a Quote</h1>
          <p className="mb-2">We are happy to help you with your event</p>
          <form
            action=""
            method="post"
            className="flex flex-col items-center lg:items-start"
          >
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Last Name"
                name="name"
                id="customer_name"
                className="w-28 mr-2 h-10 border-b-[3px] border-0 focus:ring-0 border-gray-400 p-2 bg-inherit placeholder:text-gray-400 outline-none focus:border-custom-theme mb-5"
              />
              <input
                type="text"
                placeholder="+1(404) 574-9184"
                name="phone"
                id="customer_phone"
                className="w-36 h-10 border-b-[3px] border-0 focus:ring-0 border-gray-400 p-2 bg-inherit placeholder:text-gray-400 outline-none focus:border-custom-theme mb-5"
              />
            </div>
            <input
              type="email"
              placeholder="example@email.com"
              name="email"
              id="customer_email"
              className="w-64 h-10 border-b-[3px] border-0 focus:ring-0 border-gray-400 p-2 bg-inherit placeholder:text-gray-400 outline-none focus:border-custom-theme mb-5"
            />
            <button
              type="reset"
              className="h-fit w-fit px-5 py-2 bg-custom-theme text-white rounded-sm transition-all duration-200 ease-in-out hover:bg-white hover:border hover:border-custom-theme hover:text-custom-theme"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
