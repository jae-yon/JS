const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;