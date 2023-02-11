import Image from 'next/image';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="h-full w-full p-5">
      <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto items-center lg:justify-between">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl mb-3 lg:mb-5 font-sans font-bold">
            Nature&apos;s Remedies, Just a Click Away
          </h1>
          <p className="font-serif mb-3">
            At Herbs R Us, we believe in the power of nature and its ability to
            heal and enhance the body and mind. That&apos;s why we&apos;ve
            sourced the best herbs from all over the world, so you can enjoy
            their benefits without leaving the comfort of your home.
          </p>
          <Button href="/products">Shop Now</Button>
        </div>
        <div className="w-full lg:w-fit lg:h-fit">
          <Image
            src="/herbs.png"
            alt="herbs"
            width={500}
            height={330}
          />
        </div>
      </div>
    </div>
  );
}
