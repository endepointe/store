const express = require('express');
const path = require('path');
require('dotenv').config();
const api = require('./routes/api');
const stripe = require('stripe')('', { apiVersion: '' });
const app = express();
const port = process.env.port || 4002;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

// Routes
app.use('/api', api);

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

app.listen(port, () => console.log('store running'));