const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.get('/signup', (reg, res) => {
  res.render('main')
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post('/signup', (req, res) => {
  let info=req.body
  console.log(info);
  // res.json(info);
  //app.render('response')
  res.send(`<h1>Thanks ${info.username}, we will send updates to ${info.email}.</h1>`)
});