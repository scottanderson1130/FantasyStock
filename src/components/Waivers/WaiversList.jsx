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

function WaiversList({ row, index }) {
  const [open, setOpen] = useState(false);
  const [waiver, setWaiver] = useState({});
  const [sharesInput, setSharesInput] = useState(0);

  const handleOpen = () => {
    setWaiver(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSharesInput(''), 2000);
  };

  const handleSharesSubmit = (e) => {
    setSharesInput(e.target.value);
  };

  return (
    <>
      <TableRow
        className='basicTable_row'
        hover
        role='checkbox'
        tabIndex={-1}
        key={index}
      >
        <TableCell padding='checkbox' />
        <TableCell onClick={handleOpen} component='th' id={index} scope='row' padding='none'>
          {row.ticker}
        </TableCell>
        <TableCell align='right'>{row.company_name}</TableCell>
        <TableCell align='right'>
          $
          {(1 / 100) * row.current_price_per_share}
        </TableCell>
        <TableCell align='right'>{row.shares_available}</TableCell>
        <TableCell align='right'>{row.protein}</TableCell>
      </TableRow>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>{waiver.company_name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {row.ticker}
          </DialogContentText>
          <p>
            shares available:
            {' '}
            {row.shares_available - sharesInput}
          </p>
          <p>
            Price per Share: $
            {(1 / 100) * row.current_price_per_share}
          </p>
          <p>
            Total: $
            {(((1 / 100) * row.current_price_per_share) * sharesInput).toFixed(2)}
          </p>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='shares'
            type='number'
            fullWidth
            onChange={(e) => handleSharesSubmit(e)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='something'
            type='email'
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='something'
            type='email'
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='something'
            type='email'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default WaiversList;
