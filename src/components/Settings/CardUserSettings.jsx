import { Button, Input, Typography } from '@material-ui/core';
import React from 'react';

function CardUserSettings() {
  return (
    <Typography>
      <Input
        variant='outlined'
        type='text'
        value=''
        onChange=''
      />
      <Button
        variant='contained'
        color='primary'
        type='submit'
        onClick=''
        disabled=''
      >
        add
      </Button>
    </Typography>
  );
}

export default CardUserSettings;
