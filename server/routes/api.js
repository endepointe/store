const router = require('express').Router();
const { db } = require('../db/storedb_psql');
const stripe = require('stripe')(process.env.SK_TEST);

router.get('/items', (req, res) => {
  db.query('SELECT * FROM products;')
    .then((data) => {
      console.log(data);
      return res.status(200).send(data);
    }).catch((error) => {
      return res.status(500).send('ERROR: ' + error);
    });
});
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
    total += items[i].content.price;
  }
  return total * 100;
}
router.post('/create-payment-intent', async (req, res) => {
  console.log(req.body.total);
  console.log(req.body.items);
  const { total, items } = req.body;
  if ((total * 100) === calculateOrderAmount(items)) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' }
    });
    console.log(paymentIntent);
    res.status(200).send({
      publishableKey: process.env.STRIPE_TEST_PUBLISHABLE_KEY,
      clientSecret: paymentIntent.clientSecret
    });
  } else {
    res.status(500).send('There is an issue with your cart, try again.');
  }
});
//////
////
//
////
//////
router.get('/secret', async (req, res) => {

});
//////
////
//
////
//////
module.exports = router;