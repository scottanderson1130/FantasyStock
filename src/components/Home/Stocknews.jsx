/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import StockList from './StockList.jsx';
import fakenews from './fakenews.json';

// const config = {
//   method: 'get',
//   url: 'https://newsapi.org/v2/everything?q=stocks&from=2020-10-28&to=2020-10-28&sortBy=popularity',
//   headers: {
//     'X-API-Key': 'b56b4a9004a848c78d1b0fd02bbf2ad0',
//     Cookie: '__cfduid=d15d8964d6c38c18e9524dc8b4843c9241603756878'
//   }
// };
function Stocknews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // axios(config)
    //   .then((response) => {
    //     setArticles(response.data.articles);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setArticles(fakenews.articles);
  }, []);

  return (
    <div style={{ marginTop: '50px' }}>
      <h1>Stock News:</h1>
      { articles && articles.map((article, ind) => <StockList key={ind} article={article} />) }
    </div>
  );
}

export default Stocknews;
