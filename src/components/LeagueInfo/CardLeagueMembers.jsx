import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function CardLeagueMembers({ leagueInfo }) {
  CardLeagueMembers.propTypes = {
    leagueInfo: PropTypes.string.isRequired
  };

  return (
    <Typography>
      {leagueInfo?.users?.map((user) => (
        <ul>
          <li>
            Team Name:
            <p>{user.league_user.team_name}</p>
            <p>{user?.username}</p>
          </li>
        </ul>
      ))}
    </Typography>
  );
}

export default CardLeagueMembers;
