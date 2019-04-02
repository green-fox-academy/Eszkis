'use strict'

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json())

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})
app.get('/', (req, res) => {
  res.send('Hello world!');
});