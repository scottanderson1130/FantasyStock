const axios = require('axios');

const getNews = (todayDate) => new Promise((resolve, reject) => {
  const config = {
    method: 'get',
    url: `https://newsapi.org/v2/everything?q=stocks&from=${todayDate}&to=${todayDate}&sortBy=popularity`,
    headers: {
      'X-API-Key': 'b56b4a9004a848c78d1b0fd02bbf2ad0',
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    }
  };
  axios(config)
    .then((response) => resolve(response.data.articles))
    .catch((error) => reject(error));
});

module.exports = {
  getNews
};
