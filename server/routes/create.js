const router = require('express').Router();
const { db } = require('../db/storedb_psql');

router.get('/', async (req, res) => {

  db.connect();

  console.log(db);

  res.status(200).send(db);
});

module.exports = router;