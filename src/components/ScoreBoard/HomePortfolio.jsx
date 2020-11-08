import React from 'react';

function HomePortfolio({
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
        {Number(userId) + 1}
      </div>
      <div>
        {(((pps * shares) - cpps) * 0.01).toFixed(2)}
      </div>
    </div>
  );
}

export default HomePortfolio;
