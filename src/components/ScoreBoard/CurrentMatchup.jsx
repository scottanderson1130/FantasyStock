import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AwayPortfolio from './AwayPortfolio.jsx';
import HomePortfolio from './HomePortfolio.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function CurrentMatchup({ switchViews, homePortfolio, awayPortfolio }) {
  const classes = useStyles();

  console.log('PORTFOLIO (20)', homePortfolio);

  function FormRow() {
    return (
      <>
        {awayPortfolio.map((stock) => (
          <Grid item xs={6}>
            <Paper
              className={classes.paper}
            >
              <AwayPortfolio
                companyName={stock.stock.company_name}
                ticker={stock.stock.ticker}
                pps={stock.portfolio.price_per_share_at_purchase}
                cpps={stock.stock.current_price_per_share}
                shares={stock.portfolio.shares}
                userId={stock.id_user}
              />
            </Paper>
          </Grid>
        ))}
        {homePortfolio.map((stock) => (
          <Grid item xs={6}>
            <Paper
              className={classes.paper}
            >
              <HomePortfolio
                companyName={stock.stock.company_name}
                ticker={stock.stock.ticker}
                pps={stock.portfolio.price_per_share_at_purchase}
                cpps={stock.stock.current_price_per_share}
                shares={stock.portfolio.shares}
                userId={stock.id_user}
              />
            </Paper>
          </Grid>
        ))}
      </>
    );
  }

  return (
    <div>
      Current Matchup
      <button type='button' onClick={switchViews}>Click</button>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid container item xs={12} spacing={0}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CurrentMatchup;
