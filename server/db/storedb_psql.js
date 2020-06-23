const pgp = require('pg-promise')();
const db = pgp(`postgres://${process.env.PSQLUSER}:${process.env.PSQLPASS}@localhost:5432/store`);

console.log(db);

module.exports = { db };