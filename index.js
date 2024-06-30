const express = require('express');
const { routerApi } = require('./routes/index');

const app = express();
const port = 3000;

routerApi(app);

app.get('/', (req, res) => {
  res.send('Server en Express');
});

app.listen(port, () => {
  console.log(
    `Listening at port: http://localhost:${port}\nProducts: http://localhost:${port}/api/v1/products\nUsers: http://localhost:${port}/api/v1/users\nCategories: http://localhost:${port}/api/v1/categories`,
  );
});
