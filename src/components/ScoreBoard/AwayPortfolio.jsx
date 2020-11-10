import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 150,
    textAlign: 'center'
  },
  score: {
    float: 'left'
  },
  stock: {
    fontSize: 14
  }
}));

function AwayPortfolio({
  companyName,
  pps,
  cpps,
  shares
}) {
  AwayPortfolio.propTypes = {
    companyName: PropTypes.string.isRequired,
    pps: PropTypes.number.isRequired,
    cpps: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired
  };
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardContent className={classes.root}>
          <Typography>
            {companyName}
          </Typography>
          <Typography>
            {(((pps * shares) - cpps) * 0.01).toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default AwayPortfolio;
