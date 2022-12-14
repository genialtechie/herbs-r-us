import {
  getAvailableProducts,
  getCategories,
  getCategoryProducts,
  getFilteredProducts,
} from '../../prisma/queries';
import Image from 'next/image';
import Link from 'next/link';

export default function Products({ products, categories }) {
  return (
    <div className="container h-fit pt-14 pb-14 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className=" order-1 lg:order-none p-5 text-center lg:text-left">
          <h1 className="text-xl font-bold text-black">Our Products</h1>
          <ul className="mt-4">
            <li className="text-lg mx-auto lg:mx-0 w-fit hover:text-custom-theme transition-all duration-300 ease-in hover:cursor-pointer">
              <Link href="/products?category=all">All Products</Link>
            </li>
            {categories.map((category) => (
              <li
                key={category.id}
                className="text-lg mx-auto lg:mx-0 w-fit hover:text-custom-theme transition-all duration-300 ease-in hover:cursor-pointer"
              >
                <Link href={`/products?category=${category.name}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2 order-3 p-5 lg:order-none lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 gap-y-16 lg:grid-cols-3 lg:gap-8 auto-rows-max">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
            >
              <div
                key={product.id}
                className="rounded-sm shadow-md relative group hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
              >
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="rounded-sm object-cover"
                />
                <div className="absolute z-10 top-0 left-0 max-w-xs">
                  <h3 className="text-lg lg:text-md min-w-[150px] px-5 py-2 text-left font-bold bg-black/30 text-white group-hover:bg-custom-theme transition duration-300 ease-in-out">
                    {product.name}
                  </h3>
                  <p className="text-lg w-fit px-5 py-2 bg-black/30 text-white group-hover:bg-custom-theme transition duration-300 ease-in-out">
                    {product.price} USD
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="order-2 lg:order-none p-5 lg:pl-20 mb-10 text-center lg:text-left">
          <h1 className="text-xl font-bold text-black">Relevance</h1>
          <ul className="mt-4">
            <li className="text-lg w-fit mx-auto lg:mx-0 hover:text-custom-theme transition-all duration-300 ease-in hover:cursor-pointer">
              <Link href="/products?category=all&filter=asc">
                Price: Low to High
              </Link>
            </li>
            <li className="text-lg w-fit mx-auto lg:mx-0 hover:text-custom-theme transition-all duration-300 ease-in hover:cursor-pointer">
              <Link href="/products?category=all&filter=desc">
                Price: High to Low
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  let products;
  if (query.category === 'all' && !query.filter) {
    products = await getAvailableProducts();
  } else if (query.category === 'all' && query.filter) {
    products = await getFilteredProducts(query.filter);
  } else {
    products = await getCategoryProducts(query.category);
  }
  const categories = await getCategories();
  return {
    props: {
      products,
      categories,
    },
  };
}
