import { buffer } from 'micro';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import prisma from '../../prisma/prismaClient';

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

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
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        { expand: ['line_items'] }
      );

      return fulfillOrder(session)
        .then((order) => {
          res.status(200).json({ order });
          console.log('Order created');
        })
        .catch((err) =>
          res.status(400).send(`Prisma Client Error: ${err.message}`)
        );
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
