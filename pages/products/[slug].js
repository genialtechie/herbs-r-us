import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { getAvailableProducts } from '../../prisma/queries';
import QtyInput from '../../components/shop/QtyInput';
import { useCart } from '../../utils/CartContext';
import Button from '../../components/Button';

export default function Product({ product }) {
  const [qty, setQty] = useState(1);
  const [policy, setPolicy] = useState(false);
  const { dispatch, setCartOpen } = useCart();
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="h-screen container flex justify-center items-center">
        <span>This product is currently unavailable..</span>
      </div>
    );
  }

  const addToCart = () => {
    if (!policy) {
      alert('Please agree to the sales policy!');
      return;
    }
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: qty },
    });
    setCartOpen(true);
  };

  return (
    <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2 relative">
        <div className="flex justify-center p-20 items-center bg-brown h-full">
          <Image
            src={product.image_url}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className="absolute top-0 left-0 max-w-xl">
          <h3 className="text-3xl px-8 py-4 font-extrabold min-w-[200px] text-center bg-custom-theme/70 lg:bg-custom-theme text-black">
            {product.name}
          </h3>
          <p className="text-xl w-fit px-8 py-4 bg-custom-theme/70 lg:bg-custom-theme text-black">
            {product.price} USD
          </p>
        </div>
      </div>
      <div className="lg:col-span-1 px-5 lg:px-10 py-5">
        <p className="mb-5 text-sm lg:text-md">{product.description}</p>
        <div className="mb-5">
          <p className="text-sm lg:text-md">
            <span className="text-md text-gray-700 font-bold">
              Directions:{' '}
            </span>
            1 teaspoon of herbs equals 1 cup of boiling water. Tea should be
            steeped for 10 minutes before serving. You can drink up to three
            times per day. You can also combine up to three teas, but make sure
            to use three cups of water.
          </p>
        </div>
        <div className="mb-5">
          <p className="text-sm lg:text-md text-gray-700 font-bold">
            This product is not intended to cure any type of disease or replace
            any prescription medication you are currently using. The FDA has
            not approved this product. Please be aware of any herbal allergies
            you may have before using this product.
          </p>
        </div>
        <form
          onSubmit={(e) => {
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
          <div className="my-3">
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
              I agree to the{' '}
              <Link
                className="underline hover:text-custom-theme transition duration-300 ease-in-out"
                href="/policy"
              >
                sales policy
              </Link>
            </span>
          </div>
          <Button
            className="mr-5 block"
            onClick={addToCart}
          >
            Add to cart
          </Button>
        </form>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAvailableProducts();
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const products = await getAvailableProducts();
  const product = products.find((product) => product.slug === params.slug);

  return {
    props: {
      product,
    },
  };
}
