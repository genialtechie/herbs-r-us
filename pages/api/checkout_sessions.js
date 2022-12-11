const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
});

// Helper method to wait for a middleware to execute before continuing
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Run the middleware
    await runMiddleware(req, res, cors);
    const { items } = req.body;

    const transformedItems = items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          images: [item.image_url],
          metadata: {
            rentalDate: new Date(
              item.rentalDate.year,
              item.rentalDate.month - 1,
              item.rentalDate.day
            ),
            productId: item.id,
          },
        },
      },
    }));

    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        shipping_address_collection: {
          allowed_countries: ['US'],
        },
        line_items: transformedItems,
        success_url: `${req.headers.origin}/payment_status/?success=true`,
        cancel_url: `${req.headers.origin}/payment_status/?canceled=true`,
      });
      res.status(200).json({ url: session.url, id: session.id });
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.status(405).json({ statusCode: 405, message: 'Method not allowed' });
  }
}
