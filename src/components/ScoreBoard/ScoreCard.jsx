import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  score: {
    float: 'right',
    paddingRight: 20,
    paddingTop: 3,
    fontSize: 20
  }
});

function ScoreCard({
  awayScore,
  awayName,
  awayRecord,
  homeScore,
  homeName,
  homeRecord
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.score} variant='body2' component='p'>
          {awayScore}
        </Typography>
        <Typography variant='h5' component='h2'>
          Away Team Name
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {awayRecord}
        </Typography>
        <Typography className={classes.score} variant='body2' component='p'>
          {homeScore}
        </Typography>
        <Typography variant='h5' component='h2'>
          Home Team Name
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {homeRecord}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ScoreCard;
