import React from 'react';
import Grid from '@material-ui/core/Grid';
import MatchupCard from '../components/MatchupCard.jsx';
import CreateNewLeague from '../components/CreateNewLeague.jsx';
import '../css/YourStocks.css';

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
        </div>
      )
  );
}

export default Home;
