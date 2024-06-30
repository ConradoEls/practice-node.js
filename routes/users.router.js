const express = require('express');
const { person } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: person.firstName(),
      lastName: person.lastName(),
      gender: person.gender(),
    });
  }
  res.json(users);
});

module.exports = router;
