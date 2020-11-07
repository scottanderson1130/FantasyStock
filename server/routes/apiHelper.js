// const axios = require('axios');
// const { NEWS_API_KEY } = require('../config');

// console.log('KEY', NEWS_API_KEY);

// const getNews = (todayDate) => new Promise((resolve, reject) => {
//   const config = {
//     method: 'get',
//     url: `https://newsapi.org/v2/everything?q=stocks&from=${todayDate}&to=${todayDate}&sortBy=popularity`,
//     headers: {
//       'X-API-Key': NEWS_API_KEY,
//       'Content-Type': 'text/plain',
//       'Access-Control-Allow-Origin': '*'
//     }
//   };
//   axios(config)
//     .then((response) => resolve(response.data.articles))
//     .catch((error) => reject(error));
// });

// module.exports = {
//   getNews
// };
