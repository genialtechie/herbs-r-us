import Image from 'next/image';
import Button from '../components/Button';
import Link from 'next/link';
import ProductWidget from '../components/shop/ProductWidget';
import { getAvailableProducts } from '../prisma/queries';
import ReviewCard from '../components/ReviewCard';

export default function Home({ products }) {
  return (
    <div className="h-full w-full">
      <div className="p-5 flex flex-col lg:flex-row lg:w-4/5 mx-auto my-5 items-center lg:justify-between">
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
            className="mx-auto lg:mx-0"
          />
        </div>
      </div>
      <div className="w-full mx-auto my-20 p-5">
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
      <div className="w-full lg:w-4/5 mx-auto my-5 mb-20">
        <h1 className="font-bold text-4xl font-sans text-center mb-3 px-5">
          Discover What Our Customers Love About Us
        </h1>
        <h1 className="font-serif text-center mb-14">
          And we love them too! ;)
        </h1>
        <ReviewCard
          image="/customer1.png"
          className="bg-theme mb-10"
        >
          <p className="mb-2">
            Herbs R Us has been a game-changer for my wellness routine. The
            quality of their products is unparalleled and their customer service
            is top-notch. I highly recommend this store to anyone looking to
            incorporate natural herbs into their life.
          </p>
          <p className="font-semibold">- Malaya G.</p>
        </ReviewCard>
        <ReviewCard
          image="/customer2.png"
          className="bg-green md:origin-left md:-translate-x-20 md:rotate-3 mb-10"
        >
          <p className="mb-2">
            I was hesitant to try herbal supplements, but Herbs R Us convinced
            me otherwise. I love that they take the time to educate their
            customers on the benefits of each herb. I feel so much better since
            I started using their products, and I will definitely be a lifelong
            customer.
          </p>
          <p className="font-semibold">- Lamar B.</p>
        </ReviewCard>
        <ReviewCard
          image="/customer3.png"
          className="bg-brown md:origin-right md:translate-x-20 md:-rotate-3 mb-10"
        >
          <p className="mb-2">
            I appreciate their commitment to sourcing only the best products. I
            have already recommended this store to all my friends and family,
            and I&apos;ll continue to do so.
          </p>
          <p className="font-semibold">- Sarah M.</p>
        </ReviewCard>
      </div>
      <div className="h-fit lg:h-fit w-full flex flex-col lg:flex-row">
        <div className="w-full h-fit lg:w-1/2 bg-green p-5 py-10 md:p-10 lg:p-20 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-5xl text-white font-bold mb-5 font-sans">
            Healthy living made simple .
          </h2>
          <p className="lg:text-lg text-white mb-5 font-serif">
            At Herbs R Us, we take great care to ensure the quality and purity
            of each and every product we offer. We only source from trusted
            suppliers and thoroughly test each batch for quality and potency.
            Shop with confidence at Herbs R Us and experience the power of
            nature for yourself.
          </p>
          <Button
            href="/products"
            className="mx-0"
          >
            Get Yours Today
          </Button>
        </div>
        <Image
          src="/stay-healthy.jpg"
          alt="person holding herbal tea"
          width={500}
          height={500}
          className="w-full lg:w-1/2 h-[512px] object-fit object-center"
        />
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
