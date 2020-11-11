import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import Grid from '@material-ui/core/Grid';
import MatchupCard from '../components/Home/MatchupCard.jsx';
import CreateNewLeague from '../components/Home/CreateNewLeague.jsx';
import JoinLeague from '../components/Home/JoinLeague.jsx';
import '../css/YourStocks.css';
import { selectLogIn, selectUser } from '../features/userSlice.js';
import Stocknews from '../components/Home/Stocknews.jsx';
import { selectUserLeagues } from '../features/leagueSlice.js';
import logo from '../logo/logo.png';
import '../css/Home.css';

function Home() {
  const [leagues, setLeagues] = useState([]);
  const logIn = useSelector(selectLogIn);
  const user = useSelector(selectUser);
  const userLeagues = useSelector(selectUserLeagues);

  useEffect(() => {
    axios.get('/league').then((response) => setLeagues(response.data));
  }, []);

  return (
    (!logIn)
      ? (
        <div className='home_logInContainer'>
          <a
            href='/auth/google'
            className='home_pleaseLogIn'
          >
            Please Log In
          </a>
          <img className='home_logo' src={logo} alt='logo' />
        </div>
      )
      : (
        <div>
          <Grid
            className='home_MatchupCard'
            container
            justify='center'
          >
            <Carousel autoPlay={false} animation='slide' fullHeightHover={false}>
              {
                userLeagues?.map((userLeague) => (
                  <MatchupCard
                    user={user}
                    userLeague={userLeague}
                    key={userLeague.id}
                  />
                ))
              }
            </Carousel>
          </Grid>
          <div>
            <Grid
              container
              justify='center'
            >
              <div style={{ padding: '5px' }}>
                <CreateNewLeague />
              </div>
              <div style={{ padding: '5px' }}>
                <JoinLeague leagues={leagues} userLeagues={userLeagues} />
              </div>
            </Grid>
          </div>
          <div>
            <Grid
              container
              justify='center'
            >
              <Stocknews />
            </Grid>
          </div>
        </div>
      )
  );
}

export default Home;
