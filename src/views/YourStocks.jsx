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

  return (
    <div className='yourStocks'>
      {/* <h1>Your Stocks</h1> */}
      <div className='yourStocks_container'>
        <div className='yourStocks_teamInfo'>
          <h2>Team Name</h2>
          <Avatar
            className='yourStocks_logo'
            alt='logo'
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
