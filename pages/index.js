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
            Last year I got a ultrasound and they found a couple of polyps and several small fibroids. I purchased the Fibroid Killer and Uterus Cleanser tea and drank a glass 5 times a day for 6 weeks. When I went to have polyps removed 3 months later, the doctor wasn&apos;t able to find any. I went for a ultrasound and no polyps were found.
          </p>
          <p className="font-semibold">- Malaya G.</p>
        </ReviewCard>
        <ReviewCard
          image="/customer2.png"
          className="bg-green md:origin-left md:-translate-x-20 md:rotate-3 mb-10"
        >
          <p className="mb-2">
            I love the teas and needed something to help cleanse my uterus.
          </p>
          <p className="font-semibold">- Lamar B.</p>
        </ReviewCard>
        <ReviewCard
          image="/customer3.png"
          className="bg-brown md:origin-right md:translate-x-20 md:-rotate-3 mb-10"
        >
          <p className="mb-2">
            I appreciate their commitment to sourcing only the best products. It was carefully packaged and arrived on time. The aroma is beautiful.
          </p>
          <p className="font-semibold">- Sarah M.</p>
        </ReviewCard>
      </div>
      <div className="h-fit w-full flex flex-col lg:flex-row">
        <div className="w-full lg:h-[500px] h-fit lg:w-1/2 bg-brown p-5 py-10 md:p-10 lg:p-20 flex flex-col justify-center">
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
          src="/stay-healthy.jpeg"
          alt="person holding herbal tea"
          width={500}
          height={500}
          className="w-full lg:w-1/2 h-[500px] object-fit object-center"
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
