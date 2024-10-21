const path = require('path');

const express = require('express');
const app = express();

require('dotenv').config({
   path: path.join(__dirname, '/config/.env') 
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

const indexRouter = require('./routes/index');
const fakesRouter = require('./routes/fakes');

app.use('/', indexRouter);
app.use('/fakes', fakesRouter);