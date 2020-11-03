import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setLeague } from '../../features/leagueSlice.js';

const useStyles = makeStyles({
  root: {
    diplay: 'flex',
    borderRadius: '25px'
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
function MatchupCard({ league, user }) {
  const dispatch = useDispatch();

  const clickLeagueUpdate = () => {
    console.log(league.id_league);
    dispatch(setLeague(league.id_league));
  };

  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          {league.team_name}
        </Typography>
        <Typography variant='h5' component='h2'>
          {`${league.id_league} 100`}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {`${user.username} | ${league.record}`}
        </Typography>

      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
      <Link key='leaguinfo' to='/yourstocks'>
        <Button onClick={clickLeagueUpdate} size='small' href=''>My Stocks</Button>
      </Link>
      </CardActions>
    </Card>
  );
}

export default MatchupCard;
