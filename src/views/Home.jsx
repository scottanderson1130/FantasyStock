import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import Grid from '@material-ui/core/Grid';
import MatchupCard from '../components/Home/MatchupCard.jsx';
import CreateNewLeague from '../components/Home/CreateNewLeague.jsx';
import '../css/YourStocks.css';
import '../css/Home.css';
import { selectLogIn, selectUser } from '../features/userSlice.js';
import Stocknews from '../components/Home/Stocknews.jsx';
import { selectUserLeagues } from '../features/leagueSlice.js';

function Home() {
  const logIn = useSelector(selectLogIn);
  const user = useSelector(selectUser);
  const userLeagues = useSelector(selectUserLeagues);

  return (
    (!logIn)
      ? (
        <div>
          <h1>Please Log In</h1>
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
                userLeagues.map((userLeague) => (
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
              <CreateNewLeague />
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
