import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { getAvailableProducts } from '../../prisma/queries';
import QtyInput from '../../components/shop/QtyInput';

const MyDatePicker = dynamic(
  () => import('../../components/shop/MyDatePicker'),
  {
    ssr: false,
  }
);

export default function Product({ product }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [qty, setQty] = useState(1);
  const [policy, setPolicy] = useState(false);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container h-fit grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2 relative">
        <div className="flex justify-center p-20 items-center bg-[#cccccc]">
          <Image
            src={product.image_url}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className="absolute top-0 left-0 max-w-xl">
          <h3 className="text-3xl px-8 py-4 font-extrabold min-w-[200px] text-center bg-custom-theme/80 lg:bg-custom-theme text-white">
            {product.name}
          </h3>
          <p className="text-xl w-fit px-8 py-4 bg-custom-theme/80 lg:bg-custom-theme text-white">
            {product.price} USD
          </p>
        </div>
      </div>
      <div className="lg:col-span-1 p-10">
        <p className="mb-5 text-xl">{product.description}</p>
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <QtyInput
            min={1}
            max={5}
            label="Quantity"
            className="mb-5 block"
            value={qty}
            setValue={setQty}
          />
          <label
            htmlFor="rentalStart"
            className="my-4 mb-5 block"
          >
            <span className="font-semibold block text-md text-gray-700">
              Date
            </span>
            <MyDatePicker
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          </label>
          <div>
            <input
              type="checkbox"
              id="acceptPolicy"
              name="acceptPolicy"
              checked={policy}
              onChange={() => setPolicy(!policy)}
              onClick={() => setPolicy(!policy)}
              className="mr-2 outline-none focus:ring-0 focus:outline-none cursor-pointer"
            />
            <span className="text-sm">
              I have read & agree to the{' '}
              <Link
                className="underline hover:text-custom-theme transition duration-300 ease-in-out"
                href="/policy"
              >
                rental policy
              </Link>
            </span>
          </div>
          <button
            type="submit"
            className="w-fit bg-custom-theme text-white my-2 lg:my-4 transition duration-300 ease-in-out block hover:bg-gray-400 hover:text-custom-theme py-4 px-8 rounded-sm"
          >
            Add to cart
          </button>
          <button
            type="submit"
            className="w-fit bg-custom-theme text-white my-2 lg:my-4 transition duration-300 ease-in-out block hover:bg-gray-400 hover:text-custom-theme py-4 px-8 rounded-sm"
          >
            Check out now
          </button>
        </form>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAvailableProducts();
  const paths = products.map((product) => ({
    params: { slug: product.id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const products = await getAvailableProducts();
  const product = products.find((product) => product.id === params.slug);

  return {
    props: {
      product,
    },
  };
}
