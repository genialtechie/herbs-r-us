const faker = require('faker');
const prisma = require('./prismaClient');

async function main() {
  let products = [];
  let categories = [];

  for (let i = 0; i < 4; i++) {
    products.push({
      name: faker.commerce.product(),
      image_url:
        'https://via.placeholder.com/500.png?text=Product+Image+Placeholder',
      price: Number(faker.commerce.price(100, 500)),
      description: faker.commerce.productDescription(),
    });
  }

  for (let i = 0; i < 3; i++) {
    const category = await prisma.category.create({
      data: {
        name: faker.commerce.department(),
        products: {
          createMany: {
            data: products,
          },
        },
      },
    });
    categories.push(category);
  }
  console.log({ products: products, categories: categories });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
