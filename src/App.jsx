import React, { useEffect } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ScoreBoard from './views/ScoreBoard.jsx';
import YourStocks from './views/YourStocks.jsx';
import Waivers from './views/Waivers.jsx';
import Home from './views/Home.jsx';
import Nav from './components/Nav.jsx';
import TickerBar from './components/TickerBar.jsx';
import LeagueInfo from './views/LeagueInfo.jsx';
import { setLogIn, setUser } from './features/userSlice.js';
import { setYourStock } from './features/yourStockSlice.js';
import { setWaivers } from './features/waiversSlice.js';

function App() {
  const logIn = true;

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchYourStocks() {
      await axios.get('/stock/portfolio/1').then((response) => {
        const responseCopy = { ...response };
        response.data.map((stock, ind) => {
          if (stock.stock.company_name) {
            (responseCopy.data[ind].company_name = stock.stock.company_name);
          }
          if (stock.stock.ticker) {
            (responseCopy.data[ind].ticker = stock.stock.ticker);
          }
          if (stock.stock.current_price_per_share) {
            (responseCopy.data[ind].current_price_per_share = stock.stock.current_price_per_share);
          }
          return (responseCopy.data);
        });
        dispatch(setYourStock(responseCopy.data));
      });
    }
    fetchYourStocks();
  }, [dispatch]);

  useEffect(() => {
    async function fetchUser() {
      const userResponse = await axios.get('/auth/profile');
      if (userResponse.data !== '') {
        dispatch(setUser(userResponse.data));
        dispatch(setLogIn(true));
      } else {
        dispatch(setLogIn(false));
      }
      return userResponse;
    }
    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    async function fetchWaivers() {
      const waiversResponse = await axios.get('/stock/waivers/1');
      dispatch(setWaivers(waiversResponse.data));
      return waiversResponse;
    }
    fetchWaivers();
  }, [dispatch]);

  return (
    <Router>
      <div className='app'>
        <Nav logIn={logIn} />
        <TickerBar logIn={logIn} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/scoreboard' component={ScoreBoard} />
          <Route path='/yourstocks' component={YourStocks} />
          <Route path='/waivers' component={Waivers} />
          <Route path='/leagueinfo' component={LeagueInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
