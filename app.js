const express = require('express');
const path = require('path');
const app = express();

const port = 5555;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.get('/', (req, res)=> {
  try {
    res.sendFile(__dirname + '/index.html');
  } catch (error) {
    res.status(400).send(error);
  }
});


const usersRouter = require('./routes/fake-users');

app.use('/users', usersRouter);
