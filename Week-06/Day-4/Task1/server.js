'use strict'

const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

app.use('/assets', express.static('assets'));

app.get('/', (reg, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});