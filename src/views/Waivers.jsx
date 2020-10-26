import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import WaiversTable from '../components/WaiversTable.jsx';
import '../css/Waivers.css';

function Waivers() {
  const [search, setSearch] = useState('');

  const rows = [
    {
      name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3
    },
    {
      name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9
    },
    {
      name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0
    },
    {
      name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0
    },
    {
      name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9
    },
    {
      name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5
    },
    {
      name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3
    },
    {
      name: 'Jelly Bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0
    },
    {
      name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7.0
    },
    {
      name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0.0
    },
    {
      name: 'Marshmallow', calories: 318, fat: 0, carbs: 81, protein: 2.0
    },
    {
      name: 'Nougat', calories: 360, fat: 19.0, carbs: 9, protein: 37.0
    },
    {
      name: 'Oreo', calories: 437, fat: 18.0, carbs: 63, protein: 4.0
    }
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // console.log(InputProps);

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
