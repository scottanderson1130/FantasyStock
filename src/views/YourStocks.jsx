/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core/';
import axios from 'axios';
import BasicTable from '../components/YourStocks/StocksTable.jsx';
import '../css/YourStocks.css';
import CardStats from '../components/YourStocks/CardStats.jsx';
import { selectYourStock, setYourStock } from '../features/yourStockSlice.js';
import { selectUser } from '../features/userSlice.js';
import { selectLeague } from '../features/leagueSlice.js';

function YourStocks() {
  const rows = useSelector(selectYourStock);
  const [bankBalance, setBankBalance] = useState({});
  const user = useSelector(selectUser);
  const league = useSelector(selectLeague);

  const dispatch = useDispatch();

  // const updateBank = (userId) => {
  //   axios.get(`/stock/bank/${userId}`).then((money) => setBankBalance(money.data.bank_balance));
  // };

  useEffect(() => {
    axios.get(`/stock/portfolio/${user.id}`)
      .then((response) => response.data.filter((info) => info.id_league === league))
      .then((data) => dispatch(setYourStock(data)));
  }, [dispatch, user]);

  useEffect(() => {
    axios.get(`/stock/bank/${user?.id}`)
      .then((response) => setBankBalance(response.data.bank_balance));
  }, [user?.id]);

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
          <CardStats bankBalance={bankBalance} />
        </div>
        <BasicTable
          rows={rows}
          user={user}
          bankBalance={bankBalance}
          setBankBalance={setBankBalance}
          className='yourStocks_table'
        />
      </div>
    </div>
  );
}

export default YourStocks;
