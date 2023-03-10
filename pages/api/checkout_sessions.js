const { Client, Environment, ApiError } = require('square');
import Cors from 'cors';
import { randomUUID } from 'crypto';

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

// Initializing the square client
const client = new Client({
  environment: Environment.Production,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

const { checkoutApi } = client;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Run the middleware
    await runMiddleware(req, res, cors);
    const { items } = req.body;

    const transformedItems = items.map((item) => ({
      quantity: item.quantity.toString(),
      metadata: {
        productId: item.id,
      },
      name: item.name,
      basePriceMoney: {
        currency: 'USD',
        amount: item.price * 100,
      },
    }));

    try {
      const session = await checkoutApi.createPaymentLink({
        idempotencyKey: randomUUID(),
        checkoutOptions: {
          merchantSupportEmail: 'jumparoundinfl@yahoo.com',
          askForShippingAddress: true,
        },
        order: {
          locationId: process.env.SQUARE_LOCATION_ID,
          lineItems: transformedItems,
          // taxes: [
          //   {
          //     name: 'Sales Tax',
          //     percentage: '8.75',
          //     scope: 'ORDER',
          //   },
          // ],
          serviceCharges: [
            {
              name: 'Shipping',
              amountMoney: {
                currency: 'USD',
                amount: 900,
              },
              calculationPhase: 'TOTAL_PHASE',
              scope: 'ORDER',
            },
          ],
        },
      });
      res.status(200).json(session.result.paymentLink);
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
      console.log(error);
    }
  } else {
    res.status(405).json({ statusCode: 405, message: 'Method not allowed' });
  }
}
