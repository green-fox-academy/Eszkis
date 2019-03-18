const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  let data = {
    message: 'i love this task'
  };
  if (data === undefined) {
    res.send({ "error": "I am Groot!" });
  } else {
    res.send({
      "received": data.message,
      "translated": "I am Groot!"
    });
  };
});

module.exports = app;