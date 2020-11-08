import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import League from './League.jsx';
import { selectUser } from '../../features/userSlice.js';

const useStyles = makeStyles({
  buttonPadding: {
    marginTop: 25
  }
});

function JoinLeague({ leagues }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const user = useSelector(selectUser);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    axios.post('/league/addUser', {
      userIDs: [user.id],
      leagueID: id
    });
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant='outlined'
        color='primary'
        className={classes.buttonPadding}
        onClick={handleClick}
      >
        Join League
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {leagues && leagues.map((showLeague) => {
          if (showLeague.id_owner !== user.id) {
            return (
              <MenuItem onClick={() => handleClose(showLeague.id)}>
                <League
                  leagueId={showLeague.id}
                  leagueName={showLeague.league_name}
                />
              </MenuItem>
            );
          }
        })}
      </Menu>
    </div>
  );
}

export default JoinLeague;
