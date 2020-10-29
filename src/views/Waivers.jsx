import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import WaiversTable from '../components/Waivers/WaiversTable.jsx';
import '../css/Waivers.css';

function Waivers() {
  const [search, setSearch] = useState('');

  const rows = [
    {
      id: 1, ticker: 'AAPL', company_name: 'Apple, Inc', current_price_per_share: 11215, shares_available: 90, protein: 4.3
    },
    {
      id: 2, ticker: 'GOOGL', company_name: 'Alphabet, Inc.', current_price_per_share: 151959, shares_available: 100, protein: 4.9
    }
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (

    <div className='waivers'>
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
      <WaiversTable rows={rows} search={search} />
    </div>
  );
}

export default Waivers;
