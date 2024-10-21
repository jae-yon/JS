const { faker } = require('@faker-js/faker');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let {num} = req.query;
  
  let users = [];

  if (num) {
    for (let i = 0; i < num; i++) {
      users.push({
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.internet.userName(),
        contect: faker.phone.number()
      });
    }
  } else {
    users.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.internet.userName(),
      contect: faker.phone.number()
    });
  }

  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;