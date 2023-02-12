import { buffer } from 'micro';
import prisma from '../../prisma/prismaClient';

const fulfillOrder = async (session) => {
  console.log('Fulfilling order');
  const newOrder = await prisma.order.create({
    data: {
      email: session.customer_details.email,
      total: session.amount_total / 100,
      address: `${session.customer_details.address.line1}, ${session.customer_details.address.city}, ${session.customer_details.address.state}, ${session.customer_details.address.postal_code}`,
      userId: session.customer_details.name,
      products: {
        createMany: {
          data: session.line_items.data.map((item) => ({
            productId: item.price.metadata.productId,
            quantity: item.quantity,
            rentalDate: item.price.metadata.rentalDate,
          })),
        },
      },
    },
  });
  return newOrder;
};

export default async function webhook(req, res) {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();

    try {
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // if () {

    //   return fulfillOrder(session)
    //     .then((order) => {
    //       res.status(200).json({ order });
    //       console.log('Order created');
    //     })
    //     .catch((err) =>
    //       res.status(400).send(`Prisma Client Error: ${err.message}`)
    //     );
    // }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
