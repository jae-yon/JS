const path = require('path');

require('dotenv').config({
   path: path.join(__dirname, '/config/.env') 
});

const express = require('express');
const app = express();

app.listen(port, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});

app.get('/', (req, res)=> {
  try {
    res.sendFile(__dirname + '/index.html');
  } catch (error) {
    res.status(400).send(error);
  }
});


const fakesRouter = require('./routes/fakes');

app.use('/fakes', fakesRouter);
