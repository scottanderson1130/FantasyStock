import React from 'react';
import { Avatar } from '@material-ui/core/';
import BasicTable from '../components/BasicTable.jsx';
import '../css/YourStocks.css';

function YourStocks() {
  return (
    <div className='yourStocks'>
      <h1>Your Stocks</h1>
      <div className='yourStocks_container'>
        <div className='yourStocks_teamInfo'>
          <h2>Team Name</h2>
          <Avatar
            className='yourStocks_logo'
            alt=''
            src='https://i.redd.it/gz311zrrcwi11.png'
          />
        </div>
        <BasicTable className='yourStocks_table' />
      </div>
    </div>
  );
}

export default YourStocks;
