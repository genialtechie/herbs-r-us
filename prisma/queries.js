import prisma from './prismaClient';

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      where: {
        quantity: { gt: 0 },
      },
    });
    return products;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
