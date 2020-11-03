/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
// import { getNews } from '../../../server/routes/apiHelper.js';
import StockList from './StockList.jsx';
import fakenews from './fakenews.json';

// const todayDate = new Date().toISOString().split('T')[0];

function Stocknews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // getNews(todayDate).then((data) => setArticles(data));
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
