import React from 'react';
import Grid from '@material-ui/core/Grid';
import MatchupCard from '../components/Home/MatchupCard.jsx';
import CreateNewLeague from '../components/Home/CreateNewLeague.jsx';
import '../css/YourStocks.css';
import Stocknews from '../components/Home/Stocknews.jsx';

// eslint-disable-next-line react/prop-types
function Home(logIn) {
  return (
    (!logIn)
      ? (
        <div>
          <h1>Please Log In</h1>
        </div>
      )
      : (
        <div>
          <Grid container justify='center'>
            <div>
              <MatchupCard />
            </div>
          </Grid>
          <div>
            <Grid container justify='center'>
              <CreateNewLeague />
            </Grid>
          </div>
          <div>
            <Grid container justify='center'>
              <Stocknews />
            </Grid>
          </div>
        </div>
      )
  );
}

export default Home;
