// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import faker from 'faker';
// import { PrismaClient } from '@prisma/client';

// let prisma;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

// export default async function handler(req, res) {
//   let products = [];
//   let categories = [];
//   let photoBlogs = [];

//   for (let i = 0; i < 10; i++) {
//     products.push({
//       name: faker.commerce.product(),
//       image_url: faker.image.imageUrl(),
//       price: Number(faker.commerce.price(100, 500)),
//     });
//   }

//   for (let i = 0; i < 10; i++) {
//     photoBlogs.push({
//       title: faker.lorem.sentence(),
//       image_url: faker.image.imageUrl(),
//       description: faker.lorem.paragraph(),
//     });
//   }

//   try {
//     const category = await prisma.category.create({
//       data: {
//         name: faker.commerce.department(),
//         products: {
//           createMany: {
//             data: products,
//           },
//         },
//       },
//     });
//     categories.push(category);

//     const createdPhotoBlogs = await prisma.photoBlog.createMany({
//       data: photoBlogs,
//     });

//     res.status(200).json({
//       products: products,
//       categories: categories,
//       photoBlogs: createdPhotoBlogs,
//       statustext: 'Dummy data generated and inserted!',
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       statustext: 'Error generating dummy data!',
//       error: error,
//     });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
