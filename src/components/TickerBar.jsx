import React from 'react';
import '../css/TickerBar.css';
import Ticker from 'react-ticker';
import { useSelector } from 'react-redux';
import { selectLogIn } from '../features/userSlice.js';
import { selectYourStock } from '../features/yourStockSlice.js';

// eslint-disable-next-line react/prop-types
function TickerBar() {
  const ticker = useSelector(selectYourStock);
  const logIn = useSelector(selectLogIn);

  console.log(ticker);

  return (
    (!logIn) ? <div />
      : (ticker.length
        && (
        <div className='tickerBar'>
          <Ticker mode='smooth' className='tickerBar_ticker'>
            {() => (
              <>
                {ticker.map((example) => (
                  <h3 key={example.ticker} className='tickerBar_text'>
                    {example.ticker}
                    <div className={example.current_price_per_share * 0.01 > 0 ? 'green' : 'red'}>
                      {example.current_price_per_share * 0.01 > 0 ? `+${example.current_price_per_share * 0.01}` : example.current_price_per_share * 0.01}
                    </div>
                  </h3>
                ))}
              </>
            )}
          </Ticker>
        </div>
        )

      )

  );
}

export default TickerBar;
