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
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setWaivers } from '../../features/waiversSlice.js';
import { setYourStock } from '../../features/yourStockSlice.js';

function StocksList({
  row, index, user, bankBalance, setBankBalance
}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [myStocks, setMyStocks] = useState({});
  const [sharesInput, setSharesInput] = useState(0);

  const onSubmit = () => {
    axios.post('/stock/waivers', {
      id_stock: row.id_stock,
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
        <TableCell align='right'>{((1 / 100) * row.portfolio.price_per_share_at_purchase).toFixed(2)}</TableCell>
        <TableCell align='right'>{row.portfolio.shares}</TableCell>
      </TableRow>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'><strong>{myStocks.company_name}</strong></DialogTitle>
        <DialogContent>
          <strong>Bank Balance: </strong>
          $
          {
            (bankBalance.bank_balance * 0.01).toFixed(2) - (
              (row.current_price_per_share * 0.01).toFixed(2) * sharesInput).toFixed(2)
          }
          <DialogContentText>
            <br />
            {row.ticker}
          </DialogContentText>
          <div className='waiversList_dialogBox'>
            <p className='waiversList_dialogBox'>
              <strong>Shares Available:</strong>
              {' '}
              {row.portfolio.shares - (-sharesInput)}
            </p>
            <p className='waiversList_dialogBox'>
              <strong> Price per Share: </strong>
              $
              {((1 / 100) * row.current_price_per_share).toFixed(2)}
            </p>
            <p>
              <strong>Total: </strong>
              $
              {(((1 / 100) * row.current_price_per_share) * sharesInput).toFixed(2)}
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
          <Button onClick={onSubmit} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default StocksList;
