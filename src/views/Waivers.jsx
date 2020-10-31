import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import WaiversTable from '../components/Waivers/WaiversTable.jsx';
import '../css/Waivers.css';
import { selectWaivers } from '../features/waiversSlice.js';

function Waivers() {
  const rows = useSelector(selectWaivers);

  const [search, setSearch] = useState('');

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
