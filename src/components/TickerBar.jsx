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
    price: 465
  }
];

function TickerBar() {
  return (
    <div className='tickerBar'>
      <Ticker mode='smooth' className='tickerBar_ticker'>
        {() => (
          <>
            {examples.map((example) => (
              <h3 key={example.ticker} className='tickerBar_text'>
                {example.ticker}
                +
                {example.price}
                {' '}
              </h3>
            ))}
          </>
        )}
      </Ticker>
    </div>
  );
}

export default TickerBar;
