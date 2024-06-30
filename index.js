const express = require('express');
const { routerApi } = require('./routes/index');

const app = express();
const port = 3000;

routerApi(app);

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.listen(port, () => {
  console.log(
    `Listening at port: http://localhost:${port}\nProducts: http://localhost:${port}/products`,
  );
});
