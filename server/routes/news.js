const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();

const newsRouter = Router();
const { NEWS_API_KEY } = process.env;
console.log(NEWS_API_KEY);

newsRouter.get('/', (req, res) => {
  const { todayDate } = req.query;
  const url = `https://newsapi.org/v2/everything?q=stocks&from=${todayDate}&to=${todayDate}&sortBy=popularity`;
  console.log(url);
  axios({
    method: 'GET',
    url,
    headers: {
      'X-API-Key': NEWS_API_KEY
    }
  }).then((response) => res.send(response.data))
    .catch((err) => res.send('error', err));
});

module.exports = { newsRouter };
