import React from 'react';

function AwayPortfolio({
  companyName,
  ticker,
  pps,
  cpps,
  shares,
  userId
}) {
  return (
    <div>
      <div>
        {companyName}
        {userId}
      </div>
      <div>
        {(((pps * shares) - cpps) * 0.01).toFixed(2)}
      </div>
    </div>
  );
}

export default AwayPortfolio;
