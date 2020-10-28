import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'left',
    borderRadius: '25px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
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
function MatchupCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          League Name
        </Typography>
        <Typography variant='h5' component='h2'>
          Team Name
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Owner | 4-1
        </Typography>
        <Typography variant='h5' component='h2'>
          Team Name
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Owner | 5-0
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' href='/yourstocks'>My Stocks</Button>
        <Button size='small'>Matchup</Button>
      </CardActions>
    </Card>
  );
}

export default MatchupCard;
