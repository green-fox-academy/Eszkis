const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  let data = req.query;
  if ('message' in data) {
    res.send({
      "received": data.message,
      "translated": "I am Groot!"
    });
  } else {
    res.send({ "error": "I am Groot!" });
  };
});

module.exports = app;