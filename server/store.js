const express = require('express');
const stripe = require('stripe')('', { apiVersion: '' });
const app = express();
const port = 3000;



app.get('/charge', (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: 'accept_a_payment' },
  });
  console.log(stripe);
});


app.listen(port, () => console.log('store running'));