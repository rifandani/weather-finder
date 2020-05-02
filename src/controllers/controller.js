const axios = require('axios');
const Weather = require('../model/Weather');

const api_key = '438d367cd264ca27bf4efe0f7ada35f3';

exports.renderHomePage = (req, res) => {
  res.render('index', {
    title: 'Express Weather Finder',
  });
};

exports.getWeather = (req, res) => {
  // res.send(`You type ${req.body.city}`);
  const city = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  const weather = new Weather(city);
  weather.validateUserInput();

  if (weather.errors.length) {
    res.render('index', {
      error: weather.errors.toString(),
    });
  } else {
    axios
      .get(url)
      .then((response) => {
        // console.log(`Suhu sekarang ${response.data.main.temp} Celcius di ${response.data.name}`);

        const { temp, pressure, sea_level, humidity } = response.data.main;
        const { speed, deg } = response.data.wind;
        const weatherArr = response.data.weather;

        res.render('index', {
          temp: `${temp}`,
          pressure: `${pressure}`,
          sea_level: `${sea_level}`,
          humidity: `${humidity}`,
          speed: `${speed}`,
          deg: `${deg}`,
          weatherArr: `${weatherArr}`,
          name: `${response.data.name}`,
        });
      })
      .catch((err) => {
        // console.log(err);
        res.render('index', {
          err: `${err}`,
        });
      });
  }
};

exports.renderAboutPage = (req, res) => {
  res.render('about');
};
