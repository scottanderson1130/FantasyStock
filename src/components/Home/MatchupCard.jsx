import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setLeague } from '../../features/leagueSlice.js';
import '../../css/MatchupCard.css';

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
  };

  const bankBalanceTwoDecimal = (userLeague.league_user.bank_balance * 0.01).toFixed(2);
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          {userLeague?.league_name}
        </Typography>
        <Typography variant='h5' component='h2'>
          {`Bank Balance: $ ${bankBalanceTwoDecimal}`}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {` Username: ${user.username}   Record ${userLeague.league_user.record}`}
        </Typography>

      </CardContent>
      <CardActions className='matchupCard_button'>
        <Link key='leagueinfo' to='/yourstocks'>
          <Button onClick={clickLeagueUpdate} size='small'>My Stocks</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MatchupCard;
