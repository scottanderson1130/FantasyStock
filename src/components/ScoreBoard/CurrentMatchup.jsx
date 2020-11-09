import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AwayPortfolio from './AwayPortfolio.jsx';
import HomePortfolio from './HomePortfolio.jsx';

const useStyles = makeStyles(() => ({
  root: {
    padding: 10
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column'
  },
  away: {
    float: 'left',
    padding: 5
  },
  home: {
    float: 'right',
    padding: 5
  },
  header: {
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  }
}));

function CurrentMatchup({ switchViews, homePortfolio, awayPortfolio }) {
  CurrentMatchup.propTypes = {
    switchViews: PropTypes.func.isRequired,
    homePortfolio: PropTypes.switch({
      companyName: PropTypes.string,
      ticker: PropTypes.string,
      pps: PropTypes.number,
      cpps: PropTypes.number,
      shares: PropTypes.number,
      userId: PropTypes.string
    }).isRequired,
    awayPortfolio: PropTypes.switch({
      companyName: PropTypes.string,
      ticker: PropTypes.string,
      pps: PropTypes.number,
      cpps: PropTypes.number,
      shares: PropTypes.number,
      userId: PropTypes.string
    }).isRequired
  };
  const classes = useStyles();

  function FormRow() {
    return (
      <div>
        <Paper className={classes.away}>
          {awayPortfolio.map((stock) => (
            <AwayPortfolio
              companyName={stock.stock.company_name}
              ticker={stock.stock.ticker}
              pps={stock.portfolio.price_per_share_at_purchase}
              cpps={stock.stock.current_price_per_share}
              shares={stock.portfolio.shares}
              userId={stock.id_user}
            />
          ))}
        </Paper>
        <Paper className={classes.home}>
          {homePortfolio.map((stock) => (
            <HomePortfolio
              companyName={stock.stock.company_name}
              ticker={stock.stock.ticker}
              pps={stock.portfolio.price_per_share_at_purchase}
              cpps={stock.stock.current_price_per_share}
              shares={stock.portfolio.shares}
              userId={stock.id_user}
            />
          ))}
        </Paper>
      </div>
    );
  }

  return (
    <div>
      <h1 className={classes.header}>Current Matchup</h1>
      <div className={classes.button}>
        <Button
          variant='contained'
          color='primary'
          onClick={switchViews}
          size='small'
        >
          Scoreboard
        </Button>
      </div>
      <div className={classes.root}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
      </div>
    </div>
  );
}

export default CurrentMatchup;
