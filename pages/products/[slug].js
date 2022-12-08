import { getAvailableProducts } from '../../prisma/queries';
import { useRouter } from 'next/router';
import Image from 'next/image';
import QtyInput from '../../components/shop/QtyInput';

export default function Product({ product }) {
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
          />
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
