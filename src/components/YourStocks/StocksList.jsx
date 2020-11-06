/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TableCell,
  TableRow,
  TextField
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setWaivers } from '../../features/waiversSlice.js';
import { setYourStock } from '../../features/yourStockSlice.js';
import { selectLeague } from '../../features/leagueSlice.js';

function StocksList({
  row, user, index, bankBalance, setBankBalance
}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [myStocks, setMyStocks] = useState({});
  const [sharesInput, setSharesInput] = useState(0);

  const league = useSelector(selectLeague);

  // const getWaivers = () => {
  //   axios.get(`/stock/waivers/${league}`)
  //     .then((waiver) => dispatch(setWaivers(waiver.data)));
  // };

  // useEffect(() => {
  //   getWaivers();
  //   fetchYourStocks(user.id);
  //   updateBank(user.id);
  // }, []);

  const onSubmit = () => {
    axios.post('/stock/waivers', {
      id_stock: row.id,
      id_league: league,
      id_user: user.id,
      portfolio: {
        price_per_share_at_purchase: row.current_price_per_share,
        shares: Number(sharesInput)
      }
    }).then(() => axios.get(`/stock/bank/${user.id}`)
      .then((response) => setBankBalance(response.data.bank_balance)))
      .then(() => axios.get(`/stock/waivers/${league}`))
      .then((waivers) => dispatch(setWaivers(waivers.data)))
      .then(() => axios.get(`/stock/portfolio/${user.id}`)
        .then((stocks) => dispatch(setYourStock(stocks.data))));
    setOpen(false);
    setTimeout(() => setSharesInput(''), 1000);
  };

  const handleOpen = () => {
    setMyStocks(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSharesInput(''), 1000);
  };

  const handleSharesSubmit = ((e) => {
    setSharesInput(e.target.value);
  });
  console.log('BANK BALANCE', bankBalance);
  return (
    <>
      <TableRow
        onClick={handleOpen}
        className='basicTable_row'
        hover
        role='checkbox'
        tabIndex={-1}
        key={index}
      >
        <TableCell padding='checkbox' />
        <TableCell component='th' id={index} scope='row' padding='none'>
          {row.ticker}
        </TableCell>
        <TableCell align='right'>{row.company_name}</TableCell>
        <TableCell align='right'>{(0.01 * row.price_per_share_at_purchase).toFixed(2)}</TableCell>
        <TableCell align='right'>{row.shares}</TableCell>
        <TableCell align='right'>{(row.current_price_per_share * 0.01).toFixed(2)}</TableCell>
      </TableRow>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'><strong>{myStocks.company_name}</strong></DialogTitle>
        <DialogContent>
          <strong>Bank Balance: </strong>
          $
          {
            ((bankBalance * 0.01) - (
              (row.current_price_per_share * 0.01) * sharesInput)).toFixed(2)
          }
          <DialogContentText>
            <br />
            {row.ticker}
          </DialogContentText>
          <div className='waiversList_dialogBox'>
            <p className='waiversList_dialogBox'>
              <strong>Shares Available:</strong>
              {' '}
              {row.shares - (-sharesInput)}
            </p>
            <p className='waiversList_dialogBox'>
              <strong> Price per Share: </strong>
              $
              {(0.01 * row.current_price_per_share).toFixed(2)}
            </p>
            <p>
              <strong>Total: </strong>
              $
              {((0.01 * row.current_price_per_share) * sharesInput).toFixed(2)}
            </p>
          </div>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='buy/sell shares'
            type='number'
            fullWidth
            onChange={(e) => handleSharesSubmit(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => onSubmit()} color='primary' value={row.id}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default StocksList;
