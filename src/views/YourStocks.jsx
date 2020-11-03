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

  useEffect(() => {
    async function fetchYourStocks() {
      await axios.get(`/stock/portfolio/${user?.id}`).then((response) => {
        const responseFilter = response.data.filter((info) => info.id_league === league);
        responseFilter
          .map((stock, ind) => {
            if (stock.stock.company_name) {
              (responseFilter[ind].company_name = stock.stock.company_name);
            }
            if (stock.stock.ticker) {
              (responseFilter[ind].ticker = stock.stock.ticker);
            }
            if (stock.stock.current_price_per_share) {
              (
                responseFilter[ind].current_price_per_share = stock.stock.current_price_per_share);
            }
            return (responseFilter);
          });
        dispatch(setYourStock(responseFilter));
      });
    }
    fetchYourStocks();
  }, [dispatch, user]);

  useEffect(() => {
    axios.get(`/stock/bank/${user?.id}`)
      .then((response) => setBankBalance(response.data));
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
        <BasicTable rows={rows} user={user} bankBalance={bankBalance} setBankBalance={setBankBalance} className='yourStocks_table' />
      </div>
    </div>
  );
}

export default YourStocks;
