const prisma = require('./prismaClient');

async function main() {
  let jumps = [];
  let concessions = [];
  let slides = [];

  jumps.push({
    name: 'Disney Inflatable',
    slug: 'disney-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1673575784/IMG_2721_1_dkuyuh.png',
    price: 140,
    description:
      "Introducing the Disney Princess Bounce House! This bouncy castle features all your favorite Disney Princesses and a built-in basketball hoop. Perfect for any little princess's birthday party or special event. Make a reservation now and let the royal fun begin!",
  });

  jumps.push({
    name: 'Birthday Cake',
    slug: 'birthday-cake-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1673575785/IMG_2719_1_eqycww.png',
    price: 135,
    description:
      "Our Birthday Cake Bounce House! This bouncy castle features a giant birthday cake with candles and sprinkles. Perfect for any child's birthday party. Make a reservation now and let the birthday fun begin!",
  });

  jumps.push({
    name: 'Dream Castle',
    slug: 'dream-castle-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1673575785/IMG_2724_1_wemyji.png',
    price: 125,
    description:
      "Introducing the Castle Bounce House! This bouncy castle is designed to look like a real castle, complete with a drawbridge and towers. Perfect for any child's royal-themed birthday party",
  });

  jumps.push({
    name: 'Sesame Street',
    slug: 'sesame-street-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1673576990/image000000_1_azgttm.png',
    price: 140,
    description:
      "Introducing the Sesame Street Bounce House! This bouncy castle features all your favorite Sesame Street characters. Perfect for any child's birthday party or special event. Make a reservation now and let the fun begin!",
  });

  jumps.push({
    name: 'Sports Arena',
    slug: 'sports-arena-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1673575785/IMG_2723_1_wyqvkz.png',
    price: 130,
    description:
      "Introducing the Sports Arena Bounce House! This bouncy castle features a basketball hoop, soccer goal, and baseball bat. Perfect for any child's birthday party or special event. Make a reservation now and let the games begin!",
  });

  jumps.push({
    name: 'Thomas The Train',
    slug: 'thomas-train-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1673575784/IMG_2722_1_kazilu.png',
    price: 135,
    description:
      "Introducing Thomas the train! This bouncy castle features Thomas the train and his friends. Perfect for any child's birthday party or special event. Make a reservation now and let the fun begin!",
  });

  slides.push({
    name: '17ft. Slide With Pool',
    slug: '17-foot-water-slide',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980855/jainflatables/product7_wxtfbd.png',
    price: 325,
    description:
      'Introducing the Tropical Splash Water Slide! This water slide features palm trees, exotic flowers, and a built-in pool at the bottom. Perfect for any summer party or event. Make a reservation now!',
  });

  slides.push({
    name: 'Hoop-It-Up',
    slug: 'hoop-shoot-water-slide',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670983274/jainflatables/product8_aik3mb.png',
    price: 80,
    description:
      'The Hoop-It-Up Water Slide is a great addition to any party or event. This water slide features a basketball hoop at the top and a built-in pool at the bottom. Make a reservation now and let the fun begin!',
  });

  slides.push({
    name: '15ft. Double Slide',
    slug: '15-foot-double-water-slide',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1673575785/IMG_2720_1_noduzw.png',
    price: 300,
    description:
      'The Summer Splash Water Slide features a shaded area at the top and a built-in pool at the bottom. Perfect for any summer party or event. Make a reservation now and let the fun begin!',
  });

  concessions.push({
    name: 'Popcorn Machine',
    slug: 'popcorn-machine',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980854/jainflatables/product9_sviexm.png',
    price: 60,
    description:
      'The Popcorn Machine is a great addition to any party or event. This machine features a 6oz kettle and a 50 servings capacity. Make a reservation now!',
  });

  concessions.push({
    name: 'Cotton Candy Machine',
    slug: 'cotton-candy-machine',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1671071972/jainflatables/product11_omt6et.png',
    price: 60,
    description:
      'The Cotton Candy Machine is a great addition to any party or event. This machine has a 50 servings capacity. Make a reservation now!',
  });

  concessions.push({
    name: 'Snow Cone Machine',
    slug: 'snow-cone-machine',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1671071972/jainflatables/product10_t7wyod.png',
    price: 60,
    description:
      'The Snow Cone Machine is a great addition to any party or event. This machine has a 50 servings capacity. Make a reservation now!',
  });

  await prisma.category.create({
    data: {
      name: 'Bounces',
      products: {
        createMany: {
          data: jumps,
        },
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Water Slides',
      products: {
        createMany: {
          data: slides,
        },
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Concessions',
      products: {
        createMany: {
          data: concessions,
        },
      },
    },
  });

  console.log('Data seeded successfully');
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
