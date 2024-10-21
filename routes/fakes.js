const express = require('express');
const router = express.Router();

const fake = require('../controller/fakeController');

router.get('/users', fake.users);

module.exports = router;