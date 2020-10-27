import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../css/CardStats.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
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
  }
});

function CardStats() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className='cardStats'>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            Stats
          </Typography>
          <Typography variant='h5' component='h2'>
            information 1
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            information 2
          </Typography>
          <Typography variant='body2' component='p'>
            description
            <br />
            more description
          </Typography>
        </CardContent>
        <CardActions className='cardStats_learn-more'>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardStats;
