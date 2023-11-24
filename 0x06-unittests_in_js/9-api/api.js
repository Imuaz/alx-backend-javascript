const express = require('express');

const app = express();
const port = 7865;

// Middleware for validating :id as a number
app.param('id', (req, res, next, id) => {
  if (!isNaN(id)) {
    next();
  } else {
    res.status(400).send('Invalid cart ID. Must be a number.');
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint: GET /cart/:id
app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;
