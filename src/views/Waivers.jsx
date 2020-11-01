import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import axios from 'axios';
import WaiversTable from '../components/Waivers/WaiversTable.jsx';
import '../css/Waivers.css';
import { selectWaivers } from '../features/waiversSlice.js';
import { selectUser } from '../features/userSlice.js';

function Waivers() {
  const user = useSelector(selectUser);
  const rows = useSelector(selectWaivers);
  const [search, setSearch] = useState('');
  const [bankBalance, setBankBalance] = useState({});

  useEffect(() => {
    axios.get(`/stock/bank/${user?.id}`)
      .then((response) => setBankBalance(response.data));
  }, [user?.id]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (

    <div className='waivers'>
      <div className='waivers_bank-balance'>
        <h1>Bank Balance</h1>
        <h1 className='waivers_bank-amount'>
          $
          {bankBalance.bank_balance * 0.01}
        </h1>
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
