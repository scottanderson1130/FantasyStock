import React from 'react';
import '../css/TickerBar.css';
import Ticker from 'react-ticker';

const examples = [
  {
    ticker: 'AAC',
    price: 574
  },
  {
    ticker: 'ALV',
    price: -465
  }
];

// eslint-disable-next-line react/prop-types
function TickerBar({ logIn }) {
  return (
    (!logIn) ? <div />
      : (
        <div className='tickerBar'>
          <Ticker mode='smooth' className='tickerBar_ticker'>
            {() => (
              <>
                {examples.map((example) => (
                  <h3 key={example.ticker} className='tickerBar_text'>
                    {example.ticker}
                    <div className={example.price > 0 ? 'green' : 'red'}>
                      {example.price > 0 ? `+${example.price}` : example.price}
                    </div>
                  </h3>
                ))}
              </>
            )}
          </Ticker>
        </div>
      )

  );
}

export default TickerBar;
