import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import WaiversTable from '../components/Waivers/WaiversTable.jsx';
import '../css/Waivers.css';
import { selectWaivers, setWaivers } from '../features/waiversSlice.js';
import { selectUser } from '../features/userSlice.js';
import { selectLeague } from '../features/leagueSlice.js';

function Waivers() {
  const user = useSelector(selectUser);
  const rows = useSelector(selectWaivers);
  const [search, setSearch] = useState('');
  const [bankBalance, setBankBalance] = useState();

  const dispatch = useDispatch();
  const league = useSelector(selectLeague);

  useEffect(() => {
    async function fetchWaivers() {
      const waiversResponse = await axios.get(`/stock/waivers/${league}`);
      dispatch(setWaivers(waiversResponse.data));
      return waiversResponse;
    }
    fetchWaivers();
  }, [dispatch, league, user.leagueInfo]);

  useEffect(() => {
    axios.get(`/stock/bank/${user.id}/${league}`)
      .then((response) => setBankBalance(response.data.bank_balance));
  }, [league, user.id]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (

    <div className='waivers'>
      <div className='waivers_bank-balance'>
        <h2>Bank Balance</h2>
        <h3 className='waivers_bank-amount'>
          $
          {bankBalance * 0.01}
        </h3>
      </div>
      <div className='waivers_search'>
        <TextField
          style={{ backgroundColor: 'white' }}
          freesolo='true'
          type='search'
          label='Search Stock'
          margin='normal'
          variant='outlined'
          onChange={handleSearch}
          size='small'
        />
      </div>
      <WaiversTable
        rows={rows}
        search={search}
        user={user}
        bankBalance={bankBalance}
        setBankBalance={setBankBalance}
      />
    </div>
  );
}

export default Waivers;
