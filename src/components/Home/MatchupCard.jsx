import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
function MatchupCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          League Name
        </Typography>
        <Typography variant='h5' component='h2'>
          Team Name 100
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Owner | 4-1
        </Typography>
        <Typography variant='h5' component='h2'>
          Team Name 90
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Owner | 5-0
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button size='small' href='/yourstocks'>My Stocks</Button>
      </CardActions>
    </Card>
  );
}

export default MatchupCard;
