import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
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

function CardStats({ bankBalance, rows }) {
  CardStats.propTypes = {
    bankBalance: PropTypes.number.isRequired,
    rows: PropTypes.shape().isRequired
  };
  const classes = useStyles();

  const portfolioCalcValue = () => {
    let portfolioValue = 0;
    rows.forEach((stock) => {
      portfolioValue
        += ((stock.stock.current_price_per_share * stock.portfolio.shares) * 0.01);
    });
    return (portfolioValue);
  };

  const portfolioCalcPaid = () => {
    let portfolioPaid = 0;
    rows.forEach((stock) => {
      portfolioPaid
        += ((stock.portfolio.price_per_share_at_purchase * stock.portfolio.shares) * 0.01);
    });
    return portfolioPaid;
  };
  const portPercent = (((portfolioCalcValue() - portfolioCalcPaid()) / 100));
  const totalValue = (portfolioCalcValue() + (bankBalance * 0.01));

  return (
    <div className='cardStats'>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography variant='h5' component='h2'>
            Bank Balance:
            $
            {(bankBalance * 0.01).toFixed(2)}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            Portfolio Value:
            {' '}
            $
            {portfolioCalcValue()
              .toFixed(2)}
            (
            {portPercent.toFixed(2)}
            %
            )
            <div>
              Total Value:
              {' '}
              $
              {totalValue.toFixed(2)}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardStats;
