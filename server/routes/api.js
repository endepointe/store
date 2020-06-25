const router = require('express').Router();
const { db } = require('../db/storedb_psql');

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
  for (let i = 0; i < req.body.arr.length; ++i) {
    db.query(`INSERT INTO products VALUES (
      '${req.body.arr[i].name}',
      ${req.body.arr[i].price}
    );`);
  }
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
module.exports = router;