const express = require('express');
const path = require('path');
const create = require('./routes/create');
const dotenv = require('dotenv');
const stripe = require('stripe')('', { apiVersion: '' });
const app = express();
const port = process.env.port || 4002;

dotenv.config();

app.use(express.static(path.join(__dirname, '../client/build')));

// Routes
app.use('/create', create);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log('store running'));