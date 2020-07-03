const router = require('express').Router();
const { db } = require('../db/storedb_psql');
const stripe = require('stripe')(process.env.SK_TEST);
const bodyParser = require('body-parser');

//////
////
//
////
//////
router.post('/populate', (req, res) => {
  // for (let i = 0; i < req.body.arr.length; ++i) {
  //   db.query(`INSERT INTO products VALUES (
  //     '${req.body.arr[i].name}',
  //     ${req.body.arr[i].price}
  //   );`);
  // }
  res.status(200).send('next, drop table if not null, else, load table');
});
//////
////
//
////
//////
router.get('/get-products', async (req, res) => {

  db.query('SELECT * FROM products;')
    .then((results) => {
      console.log(results);
      res.status(200).send(results)
    })
    .catch((error) => {
      res.status(500).send(error)
    });

  return;
});
//////
////
//
////
//////
const calculateOrderAmount = items => {
  let total = parseFloat(0);
  for (let i = 0; i < items.length; ++i) {
    total += parseFloat(items[i].content.price);
  }
  return total * 100;
}
router.post('/create-payment-intent', async (req, res) => {
  const { total, items } = req.body;
  if ((total * 100) === calculateOrderAmount(items)) {
    const paymentIntent = await stripe.paymentIntents.create({
      // amount: calculateOrderAmount(items),
      amount: Math.round(total * 100),
      currency: 'usd',
      metadata: {
        integration_check: 'accept_a_payment',
      },
    });
    console.log(paymentIntent);
    return res.status(200).send({
      publishableKey: process.env.STRIPE_TEST_PUBLISHABLE_KEY,
      clientSecret: paymentIntent.client_secret
    });
  } else {
    return res.status(500).end();
  }
});
//////
////
//
////
//////
router.get('/webhook',
  bodyParser.raw({ type: 'application/json' }), (req, res) => {

    let event;

    try {
      event = JSON.parse(req.body);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log("Payment was successful");
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object;
        console.log('Payment method was attached to a customer');
        break;
      default:
        return res.status(400).end();
    }

    res.json({ received: true });
  });
//////
////
//
////
//////
module.exports = router;