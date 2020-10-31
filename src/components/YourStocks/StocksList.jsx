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
// import WaiversPopUp from './WaiversPopUp.jsx';

function StocksList({ row, index }) {
  const [open, setOpen] = useState(false);
  const [myStocks, setMyStocks] = useState({});
  const [sharesInput, setSharesInput] = useState(0);

  const handleOpen = () => {
    setMyStocks(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSharesInput(''), 1000);
  };

  const handleSubmit = () => {
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
        <TableCell align='right'>{row.price_per_share_at_purchase}</TableCell>
        <TableCell align='right'>{row.shares}</TableCell>
      </TableRow>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>{myStocks.company_name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {row.ticker}
          </DialogContentText>
          <p>
            shares available:
            {' '}
            {row.shares - (-sharesInput)}
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
          <Button onClick={handleSubmit} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default StocksList;
