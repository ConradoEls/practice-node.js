const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/products', (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })

  }
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json([
    {
      id,
      name: 'Blue Label',
      price: 1000,
    },
    {
      id,
      name: 'Fernet Branca',
      price: 500,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening at port: http://localhost:${port}`);
});
