const prisma = require('./prismaClient');

async function main() {
  let herbs = [];

  herbs.push({
    name: 'Fibroid Blaster',
    slug: 'fibroid-blaster',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1678407729/herbs-r-us/fibroid2_onux8v.jpg',
    price: 25,
    description:
      'This tea is a blend of herbs that have been used for centuries to help shrink fibroids, cysts, and PCOS. Main ingredients are Red Rasberry, Cleavers and Mullien. For best results please use Fibroid Killer with the Uterus Cleanser. Both tea blends can also be used to steam your yoni as well. How does the tea work? It assists with shrinking and for some women passing of fibroids. Each woman will have different results. The herbs help to shrink fibroids by regulating your hormonal balance and slowing down fibroid growth as well as preventing new ones from forming. They also help the lymph and blood system by eliminate fibroid tissue from the body as it breaks down. Diet is very important. Happy Healing!',
  });

  herbs.push({
    name: 'Uterus Cleanser',
    slug: 'uterus-cleanser',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1678407729/herbs-r-us/uterus-cleanser_krjwva.jpg',
    price: 25,
    description:
      'Herbal tea blends for women made by women. Uterus cleanser assists with naturally cleaning your womb. Main ingredients are Red Raspberry and Red Clover. This tea blend can also be used as a yoni steam. Happy Healing!',
  });

  herbs.push({
    name: 'Hemorrhage Eliminator',
    slug: 'hemorrhage-eliminator',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1678407729/herbs-r-us/hemorrhage_uv2nx2.jpg',
    price: 25,
    description:
      "This tea assists with naturally stopping heavy menstrual bleeding. Main ingredients are Red Raspberry, Clovers and Shepherd's purse. Use this tea during your cycle to assist with heavy bleeding. This tea can be mixed with no more pain to assist with painful cycles. ",
  });

  herbs.push({
    name: 'No More Pain',
    slug: 'pain-reliever',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1678407729/herbs-r-us/pain_loa14e.jpg',
    price: 25,
    description:
      'No more pain assists with menstrual and endometriosis pain. Main ingredients Red Clover, Red Raspberry and Stinging nettle.',
  });

  herbs.push({
    name: 'Immune Blaster',
    slug: 'immune-blaster',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1678409173/herbs-r-us/Immune_Blaster_hlhi2y.jpg',
    price: 25,
    description:
      'This tea assists with keeping your immunity healthy. Main ingredients are Echinacea, Elderberry and Ginger root blend. ',
  });

  herbs.push({
    name: 'Flu Protector',
    slug: 'flu-protector',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1678409174/herbs-r-us/flu_pmyzp3.jpg',
    price: 25,
    description:
      'Flu Protector assists with keeping your immunity healthy from the Flu symptoms. Main ingredients are Artemisia-Annua (natural herb from Africa) Echinacea, Elderberry and Ginger root blend.',
  });

  herbs.push({
    name: 'Relaxation Tea',
    slug: 'relaxation-tea',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1678407729/herbs-r-us/relaxation_dftufk.jpg',
    price: 25,
    description:
      'Relaxtion tea assists with anxiety and sleep disorders. Main ingredients are chamomile, lavender and lemon balm.',
  });

  herbs.push({
    name: 'Blood Pressure Reducer',
    slug: 'blood-pressure-reducer',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1678409174/herbs-r-us/BP_gen7kh.jpg',
    price: 25,
    description:
      'Blood Pressure Reducer assists with lowering blood pressure. Main ingredients are Hawthorne berry, Nettle and Mango leaves.',
  });

  herbs.push({
    name: 'Stay Balanced',
    slug: 'stay-balanced',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1678407729/herbs-r-us/balanced_ex5mbp.jpg',
    price: 25,
    description:
      'This tea assists with natural estrogen control for women experiencing menopause. Main ingredients are Red Clover and Black Cohosh herbal blend. This tea blend can also be used as a yoni steam.',
  });

  await prisma.category.create({
    data: {
      name: 'Herbs & Teas',
      products: {
        createMany: {
          data: herbs,
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
