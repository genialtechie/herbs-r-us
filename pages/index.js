import Image from 'next/image';
import Button from '../components/Button';
import Link from 'next/link';
import ProductWidget from '../components/shop/ProductWidget';
import { getAvailableProducts } from '../prisma/queries';

export default function Home({ products }) {
  return (
    <div className="h-full w-full p-5">
      <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto my-5 items-center lg:justify-between">
        <div className="mb-10 lg:mb-0 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl text-black mb-5 font-sans font-bold">
            Nature&apos;s Remedies, Just a Click Away
          </h1>
          <p className="font-serif mb-5">
            At Herbs R Us, we believe in the power of nature and its ability to
            heal and enhance the body and mind. That&apos;s why we&apos;ve
            sourced the best herbs from all over the world, so you can enjoy
            their benefits without leaving the comfort of your home.
          </p>
          <Button
            href="/products"
            className="mx-auto lg:mx-0"
          >
            Shop Now
          </Button>
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
      <div className="w-full mx-auto my-20">
        <h2 className="text-4xl text-center font-sans font-bold mb-3">
          Unleash the Power of Nature
        </h2>
        <p className="text-md text-center text-custom/50 md:mb-5 font-serif">
          Nourish your body and mind with our range of herbal products
        </p>
        <ProductWidget products={products} />
        <h3 className="text-xl transition duration-200 ease-in-out hover:text-theme font-bold w-fit mx-auto mt-5 underline uppercase">
          <Link href="/products?category=all">Show More</Link>
        </h3>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await getAvailableProducts();
  return {
    props: {
      products,
    },
  };
}
