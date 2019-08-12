'use strict'

const express = require('express');
const app = express();
const port = 3000;

const images = {
  cloudy: 'static\\images\\cloudy.png',
  partly_cloudy: 'static\\images\\partly_cloudy.png',
  sunny: 'static\\images\\sunny.png',
  rainy: 'static\\images\\rainy.png',
  snowy: 'static\\images\\snowy.png',
}

const forecasts = [
  {
    city: 'Seattle',
    location: 'Washington, United States',
    weather: [{ temp: 11, icon: 'cloudy', message: 'Complete Grey', img: 'static\\images\\cloudy.png' },
    { temp: 11, icon: 'cloudy', message: 'Just stay in bed.', img: 'static\\images\\cloudy.png' },
    { temp: 13, icon: 'cloudy', message: 'Meh...', img: 'static\\images\\cloudy.png' },
    { temp: 12, icon: 'cloudy', message: 'Still meh...', img: 'static\\images\\cloudy.png' },
    { temp: 13, icon: 'partly_cloudy', message: 'Not too sunny.', img: 'static\\images\\partly_cloudy.png' }],
  },
  {
    city: 'Miami',
    location: 'Florida, United States',
    weather: [{ temp: 33, icon: 'sunny', message: 'Hot.', img: 'static\\images\\sunny.png' },
    { temp: 35, icon: 'sunny', message: 'Too hot!', img: 'static\\images\\sunny.png' },
    { temp: 34, icon: 'sunny', message: 'Sunny.', img: 'static\\images\\sunny.png' },
    { temp: 34, icon: 'sunny', message: 'Beach time!', img: 'static\\images\\sunny.png' },
    { temp: 35, icon: 'sunny', message: 'Here comes the sun.', img: 'static\\images\\sunny.png' }],
  },
  {
    city: 'Barcelona',
    location: 'Spain',
    weather: [{ temp: 19, icon: 'sunny', message: 'Sunny.', img: 'static\\images\\sunny.png' },
    { temp: 15, icon: 'partly_cloudy', message: 'Not too sunny.', img: 'static\\images\\partly_cloudy.png' },
    { temp: 17, icon: 'sunny', message: 'So far so good.', img: 'static\\images\\sunny.png' },
    { temp: 16, icon: 'rainy', message: 'Rihanna - Umbrella', img: 'static\\images\\rainy.png' },
    { temp: 18, icon: 'sunny', message: 'Here comes the sun.', img: 'static\\images\\sunny.png' }],
  },
  {
    city: 'London',
    location: 'United Kingdom',
    weather: [{ temp: 4, icon: 'snowy', message: 'Go home winter.', img: 'static\\images\\snowy.png' },
    { temp: 7, icon: 'rainy', message: 'Do you have an umbrella?', img: 'static\\images\\rainy.png' },
    { temp: 10, icon: 'rainy', message: 'It\'s rainy.', img: 'static\\images\\rainy.png' },
    { temp: 9, icon: 'rainy', message: 'Meh...', img: 'static\\images\\rainy.png' },
    { temp: 11, icon: 'rainy', message: 'Meh... Again.', img: 'static\\images\\rainy.png' }],
  },
  {
    city: 'Budapest',
    location: 'Hungary',
    weather: [{ temp: 12, icon: 'partly_cloudy', message: 'It\'s cloudy.', img: 'static\\images\\partly_cloudy.png' },
    { temp: 16, icon: 'rainy', message: 'Sooo... Wet.', img: 'static\\images\\rainy.png' },
    { temp: 18, icon: 'partly_cloudy', message: 'Here comes the sun.', img: 'static\\images\\partly_cloudy.png' },
    { temp: 16, icon: 'partly_cloudy', message: 'Not too sunny.', img: 'static\\images\\partly_cloudy.png' },
    { temp: 19, icon: 'partly_cloudy', message: 'So far so good.', img: 'static\\images\\partly_cloudy.png' }],
  },
];

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.get('/', (reg, res) => {
  let query = reg.query;
  console.log(query.city);
  console.log(query.city - 1);
  console.log(forecasts[query.city - 1]);


  query.city === undefined ?
    res.render('home', { forecasts, images }) :
    res.render('city', { forecasts, images, query });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

{/* <h2><%= forecasts[query.city-1].city %></h2>
<ul>
  <li>
    <img src= <%= forecasts[query.city-1].weather.images %>>
    <p><%=forecasts[query.city-1].weather.temp %>°C </p>
    <p><%=forecasts[query.city-1].weather.message %></p>
  </li>
</ul> */}