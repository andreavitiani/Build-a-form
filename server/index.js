const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
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

app.put('/prices/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = prices.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Not found' });
  }
  const { product, store, price } = req.body;
  if (!product || !store || price == null) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  prices[index] = { id, product, store, price };
  res.json(prices[index]);
});

app.delete('/prices/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = prices.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Not found' });
  }
  prices.splice(index, 1);
  res.status(204).end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
