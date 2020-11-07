import React from 'react';
import HomePortfolio from './HomePortfolio.jsx';
import AwayPortfolio from './AwayPortfolio.jsx';

function CurrentMatchup({ switchViews, homePortfolio, awayPortfolio }) {
  return (
    <div>
      Current Matchup
      <button type='button' onClick={switchViews}>Click</button>
      <div>
        <HomePortfolio />
      </div>
      <div>
        <AwayPortfolio />
      </div>
    </div>
  );
}

export default CurrentMatchup;
