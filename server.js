if(process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express');
const db = require('./database/database');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

db();
const port="8080";

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});