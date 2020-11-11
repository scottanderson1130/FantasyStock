/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import League from './League.jsx';
import { selectUser } from '../../features/userSlice.js';
import { setUserLeagues } from '../../features/leagueSlice.js';

const useStyles = makeStyles({
  buttonPadding: {
    marginTop: 25
  }
});

function JoinLeague({ leagues, userLeagues }) {
  JoinLeague.propTypes = {
    leagues: PropTypes.instanceOf(Array).isRequired,
    userLeagues: PropTypes.instanceOf(Array).isRequired
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const userLeagueFilter = userLeagues.map((league) => league.id);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    axios.post('/league/addUser', {
      userID: user.id,
      leagueID: id
    }).then(() => axios.get(`/league/${user?.id}`))
      .then((response) => {
        if (response.data[0]) {
          dispatch(setUserLeagues(response.data[0].leagues));
        }
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
        {leagues && leagues.map((showLeague, ind) => {
          if (!userLeagueFilter.includes(showLeague.id)) {
            return (
              <MenuItem key={showLeague.id_owner} onClick={() => handleClose(showLeague.id)}>
                <League
                  leagueId={showLeague.id}
                  leagueName={showLeague.league_name}
                />
              </MenuItem>
            );
          }
          return <div key={ind} />;
        })}
      </Menu>
    </div>
  );
}

export default JoinLeague;
