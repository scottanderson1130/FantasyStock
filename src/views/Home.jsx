import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import '../css/YourStocks.css';

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
  }
});

function Home(logIn) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    (!logIn)
      ? (
        <div>
          <h1>Please Log In</h1>
        </div>
      )
      : (
        <div>
          <Grid container justify='center'>
            <div>
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
                  <Typography>
                    <Button size='small'>My Stocks</Button>
                    <Button size='small'>Matchup</Button>
                  </Typography>
                </CardActions>
              </Card>
            </div>
          </Grid>
          <div>
            <Grid container justify='center'>
              <div className={classes.root}>
                <Button variant='outlined' color='primary' onClick={handleClickOpen}>
                  Create New League
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                  <DialogTitle id='form-dialog-title'>Create A League</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Form Data to Fill in
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin='dense'
                      id='name'
                      label='League Name'
                      type='email'
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                      Cancel
                    </Button>
                    <Button onClick={handleClose} color='primary'>
                      Create!
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Grid>
          </div>
        </div>
      )
  );
}

export default Home;
