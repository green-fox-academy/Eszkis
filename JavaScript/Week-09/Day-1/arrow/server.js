'use strict';

const port = 3000;
const express = require('express');
const app = express();

app.listen(port, () => {
  console.log('Server running on port %d', port);
});


app.get('/yondu', (req, res) => {
  // TODO: implement this method
  let data = req.query;
  if ('distance' in data && 'time' in data) {
    res.send({
      "distance": data.distance,
      "time": data.time,
      "speed": data.distance/data.time
    });
  } else {
    res.send({ "error": "give proper input" });
  };
});

module.exports = app;