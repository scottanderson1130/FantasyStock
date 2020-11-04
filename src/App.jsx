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
import Settings from './views/Settings.jsx';
import MessageBoard from './views/MessageBoard.jsx';
import { setLogIn, setUser } from './features/userSlice.js';

function App() {
  const logIn = true;

  const dispatch = useDispatch();

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
          <Route path='/settings' component={Settings} />
          <Route path='/messageboard' component={MessageBoard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
