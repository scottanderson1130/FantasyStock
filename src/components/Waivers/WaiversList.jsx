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
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setWaivers } from '../../features/waiversSlice.js';
import { setYourStock } from '../../features/yourStockSlice.js';

function WaiversList({
  row, index, user, bankBalance, setBankBalance
}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [waiver, setWaiver] = useState({});
  const [sharesInput, setSharesInput] = useState(0);

  const onSubmit = () => {
    axios.post('/stock/waivers', {
      id_stock: row.id,
      id_league: user.leagueInfo[0].id_league,
      id_user: user.leagueInfo[0].id_user,
      portfolio: {
        price_per_share_at_purchase: row.current_price_per_share,
        shares: Number(sharesInput)
      }
    }).then(() => axios.get(`/stock/bank/${user?.id}`)
      .then((response) => setBankBalance(response.data)))
      .then(() => axios.get(`/stock/waivers/${user?.leagueInfo[0].id_league}`)
        .then((waivers) => dispatch(setWaivers(waivers.data))))
      .then(() => axios.get(`/stock/portfolio/${user?.id}`)
        .then((stocks) => {
          const stocksCopy = { ...stocks };
          stocks.data.map((stock, ind) => {
            if (stock.stock.company_name) {
              (stocksCopy.data[ind].company_name = stock.stock.company_name);
            }
            if (stock.stock.ticker) {
              (stocksCopy.data[ind].ticker = stock.stock.ticker);
            }
            if (stock.stock.current_price_per_share) {
              (stocksCopy.data[ind].current_price_per_share = stock.stock.current_price_per_share);
            }
            return (stocksCopy.data);
          });
          dispatch(setYourStock(stocksCopy.data));
        }))

      .catch((err) => console.error(err));

    setOpen(false);
    setSharesInput(0);
  };

  const handleOpen = () => {
    setWaiver(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSharesInput(0), 1000);
  };

  const handleSharesSubmit = (e) => {
    setSharesInput(e.target.value);
  };

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
        <TableCell align='right'>
          $
          {((1 / 100) * row.current_price_per_share).toFixed(2)}
        </TableCell>
        <TableCell align='right'>{row.sharesRemaining}</TableCell>
      </TableRow>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>{waiver.company_name}</DialogTitle>
        Bank Balance:  $
        {' '}
        {
          bankBalance.bank_balance * 0.01 - (
            (row.current_price_per_share * 0.01).toFixed(2) * sharesInput).toFixed(2)
        }
        <DialogContent>
          <DialogContentText>
            {row.ticker}
          </DialogContentText>
          <p>
            Shares Available:
            {' '}
            {row.sharesRemaining - sharesInput}
          </p>
          <p>
            Price per Share: $
            {((1 / 100) * row.current_price_per_share).toFixed(2)}
          </p>
          <p>
            Total: $
            {(((1 / 100) * row.current_price_per_share) * sharesInput).toFixed(2)}
          </p>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='buy stocks'
            type='number'
            onChange={(e) => handleSharesSubmit(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={onSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default WaiversList;
