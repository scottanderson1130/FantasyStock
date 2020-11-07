/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import StockList from './StockList.jsx';
import fakenews from './fakenews.json';

// const todayDate = new Date().toISOString().split('T')[0];

function Stocknews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // axios({
    //   method: 'GET',
    //   url: '/news',
    //   params: { todayDate }
    // }).then((response) => setArticles(response.data.articles))
    //   .catch((err) => console.warning(err));
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
