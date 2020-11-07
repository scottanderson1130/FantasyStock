import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../css/ScoreBoard.css';
import ScoreCard from '../components/ScoreBoard/ScoreCard.jsx';
import { selectLeague } from '../features/leagueSlice.js';

function ScoreBoard() {
  const [matches, setMatches] = useState([]);
  const league = useSelector(selectLeague);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `matchup/${league}`
    }).then((response) => setMatches(response.data));
  }, [league]);
  console.log('MATCHES (18)', matches);
  return (
    <div>
      {matches && matches.map((match) => (
        <ScoreCard
          awayScore={match.away.score}
          awayName={match.away.teamInfo.team_name}
          awayRecord={match.away.teamInfo.record}
          homeScore={match.home.score}
          homeName={match.home.teamInfo.team_name}
          homeRecord={match.home.teamInfo.record}
        />
      ))}
    </div>
  );
}

export default ScoreBoard;
