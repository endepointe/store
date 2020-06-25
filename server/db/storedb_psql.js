const pgp = require('pg-promise')();
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'store',
  user: process.env.PSQLUSER,
  password: process.env.PSQLPASS,
  max: 30 // use up to 30 connections
}
const db = pgp(cn);
// const db = pgp(`${process.env.PSQLUSER}://${process.env.PSQLUSER}:${process.env.PSQLPASS}@localhost:5432/store`);

module.exports = { db };