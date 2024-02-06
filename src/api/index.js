/* eslint-disable quotes */
/* eslint-disable no-console */
const express = require('express');

const sqlite3 = require('sqlite3').verbose();
const { resolve } = require('path');

const db = new sqlite3.Database(
  resolve(__dirname, '../../bin/pb/pb_data/data.db')
);

const router = express.Router();

router.get('/products', (req, res) => {
  // We need to run a sql query to get all the products
  db.all('SELECT * FROM product', (err, rows) => {
    if (err) {
      console.log('Error running sql: ' + err);

      res.status(500);
      res.json({
        message: 'Internal Server Error',
      });
    }
  });

  res.json({
    message: 'list of products',
    // data: the data from the database
  });
});

module.exports = router;
