const express = require('express');
const app = express();
app.use(express.json());

// Temporary in-memory price list
const prices = [];

app.get('/prices', (req, res) => {
  res.json(prices);
});

app.post('/prices', (req, res) => {
  const { product, store, price } = req.body;
  if (!product || !store || price == null) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const entry = { id: prices.length + 1, product, store, price };
  prices.push(entry);
  res.status(201).json(entry);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
