import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { setLeague, setLeagueOwner } from '../../features/leagueSlice.js';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    borderRadius: '25px',
    marginBottom: '10px',
    margin: '10px'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  buttonPadding: {
    marginTop: '10px'
  }
});
function MatchupCard({ userLeague, user }) {
  MatchupCard.propTypes = {
    userLeague: propTypes.string.isRequired,
    user: propTypes.string.isRequired
  };

  const dispatch = useDispatch();
  const classes = useStyles();

  const clickLeagueUpdate = () => {
    dispatch(setLeague(userLeague.id));
    dispatch(setLeagueOwner(userLeague.id_owner));
  };

  const bankBalanceTwoDecimal = (userLeague.league_user.bank_balance * 0.01).toFixed(2);
  return (
    <Link
      key='leagueinfo'
      to='/yourstocks'
    >
      <Card
        className={classes.root}
        variant='outlined'
        onClick={clickLeagueUpdate}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {userLeague?.league_name}
          </Typography>
          <Typography
            variant='h5'
            component='h2'
          >
            {`Bank Balance: $ ${bankBalanceTwoDecimal}`}
          </Typography>
          <Typography
            className={classes.pos}
            color='textSecondary'
          >
            {` Username: ${user.username}   Record ${userLeague.league_user.record}`}
          </Typography>

        </CardContent>
      </Card>
    </Link>
  );
}

export default MatchupCard;
