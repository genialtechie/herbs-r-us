import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import logo from '../public/logo.png';
import MobileNav from './MobileNav';
import { Nunito } from '@next/font/google';

const crim = Nunito({
  weight: '400',
  variable: '--font-crim',
});

const ShoppingCart = dynamic(() => import('./ShoppingCart'), { ssr: false });

const NavBar = ({ reference }) => {
  function handleClick() {
    reference.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <nav className="relative w-11/12 mx-auto h-28 flex flex-row lg:justify-between items-center">
      <MobileNav handleRef={handleClick} />
      <ul
        className={`hidden lg:flex flex-row h-fit w-fit items-center text-xl ${crim.variable} font-serif`}
      >
        <li className="font-semibold h-fit px-5 py-2 mx-3 transition-all hover:text-theme duration-200 ease-out cursor-pointer">
          <Link href="/products?category=all">Shop</Link>
        </li>
        <li
          onClick={handleClick}
          className="font-semibold h-fit px-5 py-2 mx-3 transition-all hover:text-theme duration-200 ease-out cursor-pointer"
        >
          Contact
        </li>
      </ul>
      <span className="h-fit w-fit absolute z-50 hidden lg:block m-auto inset-0">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            height={90}
            width={90}
            className="cursor-pointer scale-75"
          />
        </Link>
      </span>

      <ShoppingCart className="transition-all hover:text-theme duration-200 ease-out lg:block hidden" />
    </nav>
  );
};

export default NavBar;
