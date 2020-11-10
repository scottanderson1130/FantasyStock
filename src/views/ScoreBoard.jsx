import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../css/ScoreBoard.css';
import ScoreCard from '../components/ScoreBoard/ScoreCard.jsx';
import CurrentMatchup from '../components/ScoreBoard/CurrentMatchup.jsx';
import { selectLeague } from '../features/leagueSlice.js';

function ScoreBoard() {
  const [matches, setMatches] = useState([]);
  const [matchPortfolio, setMatchPortfolio] = useState([]);
  const [toggle, setToggle] = useState(false);
  const league = useSelector(selectLeague);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `matchup/${league}`
    }).then((response) => setMatches(response.data));
  }, [league]);

  const getMatchups = (homeId, userId) => {
    // TODO:add homeID and userID once we have users in a league

    const getHomePortfolio = axios
      .get(`/stock/portfolio/${homeId}`)
      .then((response) => response.data);

    const getAwayPortfolio = axios
      .get(`/stock/portfolio/${userId}`)
      .then((response) => response.data);

    return Promise.all([getHomePortfolio, getAwayPortfolio])
      .then((response) => response).then((ports) => {
        setMatchPortfolio(ports);
      }).then(() => setToggle(true));
  };
  const switchViews = () => {
    setToggle(false);
  };

  return (
    <div>
      {!toggle ? matches.map((match) => (
        <ScoreCard
          awayScore={match.away.score}
          awayName={match.away.teamInfo.team_name}
          awayRecord={match.away.teamInfo.record}
          awayTeamId={match.away.teamID}
          homeScore={match.home.score}
          homeName={match.home.teamInfo.team_name}
          homeRecord={match.home.teamInfo.record}
          homeTeamId={match.home.teamID}
          getMatchups={(homeID, awayID) => getMatchups(homeID, awayID)}
        />
      ))
        : (
          <div>
            <CurrentMatchup
              switchViews={switchViews}
              homePortfolio={matchPortfolio[0]}
              awayPortfolio={matchPortfolio[1]}
            />
          </div>
        )}
    </div>
  );
}

export default ScoreBoard;
