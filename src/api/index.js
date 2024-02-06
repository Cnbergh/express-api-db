const express = require('express');

const router = express.Router();

router.get('/products', (req, res) => {
  res.json({
    message: 'list of products',
  });
});
module.exports = router;
