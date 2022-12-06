import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import instagram from '../public/instagram.svg';
import facebook from '../public/facebook.svg';

const Footer = () => {
  return (
    <footer className="w-full h-fit text-black bg-[#edf2f4] container relative bottom-0 overflow-y-hidden">
      <h1 className="text-4xl px-1 pt-24 pb-14 font-bold text-center">
        We make us in <span className="text-custom-theme">happy customers</span>
      </h1>
      <div className="w-4/5 mx-auto p-5 my-5 flex flex-col lg:flex-row justify-around">
        <div className="mb-5 lg:mb-0">
          <h1 className="font-bold mb-3">We guide you to a succesful event</h1>
          <p className="mb-2 w-56">
            We are a team of specialists, who love to challenge what we already
            know.
          </p>
          <div className="flex flex-row justify-start">
            <Link href="">
              <Image
                src={instagram}
                alt="instagram"
                width={50}
                height={50}
                className="mr-2 scale-90 hover:scale-100 transition-all duration-200 ease-in-out cursor-pointer"
              />
            </Link>
            <Link href="">
              <Image
                src={facebook}
                alt="facebook"
                width={50}
                height={50}
                className="mr-2 scale-90 hover:scale-100 transition-all duration-200 ease-in-out cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="mb-10 lg:mb-0">
          <h1 className="font-bold mb-3">Contact</h1>
          <p className="mb-2">&copy; 2022, Jump Around Inflatables</p>
          <p className="mb-2">
            <Link
              className="hover:text-custom-theme hover:scale-110 transition-all duration-200 ease-in-out"
              href="tel:+31612345678"
            >
              +31 6 12345678
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
          <p>
            <Link
              className="hover:text-custom-theme hover:scale-110 transition-all duration-200 ease-in-out"
              href="https:magpollo.com"
            >
              Built by Magpollo
            </Link>
          </p>
        </div>
        <div className="mb-5 lg:mb-0">
          <h1 className="font-bold mb-3">Get a Quote</h1>
          <p className="mb-2">We are happy to help you with your event</p>
          <form
            action=""
            method="post"
            className="flex flex-col"
          >
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Last Name"
                name="name"
                id="customer_name"
                className="w-28 mr-2 h-10 border-b-[3px] border-gray-400 p-2 bg-inherit placeholder:text-gray-400 outline-none focus:border-custom-theme mb-5"
              />
              <input
                type="text"
                placeholder="+31 6 12345678"
                name="phone"
                id="customer_phone"
                className="w-36 h-10 border-b-[3px] border-gray-400 p-2 bg-inherit placeholder:text-gray-400 outline-none focus:border-custom-theme mb-5"
              />
            </div>
            <input
              type="email"
              placeholder="example@email.com"
              name="email"
              id="customer_email"
              className="w-64 h-10 border-b-[3px] border-gray-400 p-2 bg-inherit placeholder:text-gray-400 outline-none focus:border-custom-theme mb-5"
            />
            <button
              type="submit"
              className="h-fit w-fit px-5 py-2 bg-custom-theme text-white rounded-sm transition-all duration-200 ease-in-out hover:bg-white hover:border hover:border-custom-theme hover:text-custom-theme"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
