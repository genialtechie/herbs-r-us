import { getProducts } from '../../prisma/queries';

export default function Products({ products }) {
  console.log(products);
  return <div className="container h-fit p-14"></div>;
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}
