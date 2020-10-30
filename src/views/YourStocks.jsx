import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Avatar } from '@material-ui/core/';
import BasicTable from '../components/YourStocks/StocksTable.jsx';
import '../css/YourStocks.css';
import CardStats from '../components/YourStocks/CardStats.jsx';
import { setYourStock, selectYourStock } from '../features/yourStockSlice.js';

function YourStocks() {
  const dispatch = useDispatch();
  const rows = useSelector(selectYourStock);

  useEffect(() => {
    axios.get('/stock/portfolio/1').then((response) => {
      const responseCopy = { ...response };
      response.data.map((stock, ind) => {
        if (stock.stock.company_name) {
          (responseCopy.data[ind].company_name = stock.stock.company_name);
          // responseCopy.data[stock].company_name = stock.stock.company_name;
        }
        if (stock.stock.ticker) {
          (responseCopy.data[ind].ticker = stock.stock.ticker);
          // responseCopy.data[stock].company_name = stock.stock.company_name;
        }
        if (stock.stock.current_price_per_share) {
          (responseCopy.data[ind].current_price_per_share = stock.stock.current_price_per_share);
          // responseCopy.data[stock].company_name = stock.stock.company_name;
        }
        return (responseCopy.data);
      });
      dispatch(setYourStock(responseCopy.data));
    });
  }, [dispatch]);

  return (
    <div className='yourStocks'>
      {/* <h1>Your Stocks</h1> */}
      <div className='yourStocks_container'>
        <div className='yourStocks_teamInfo'>
          <h2>Team Name</h2>
          <Avatar
            className='yourStocks_logo'
            alt=''
            src='https://i.redd.it/gz311zrrcwi11.png'
          />
        </div>
        <div className='YourStocks_card'>
          <CardStats />
        </div>
        <BasicTable rows={rows} className='yourStocks_table' />
      </div>
    </div>
  );
}

export default YourStocks;
