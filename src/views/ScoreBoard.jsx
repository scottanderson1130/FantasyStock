import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import '../css/ScoreBoard.css';
import ScoreBoardTable from '../components/ScoreBoard/ScoreBoardTable.jsx';
import { selectLeague } from '../features/leagueSlice.js';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

function ScoreBoard() {
  const [expanded, setExpanded] = useState('');
  const [matches, setMatches] = useState([]);
  const league = useSelector(selectLeague);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `matchup/${league}`
    }).then((response) => setMatches(response.data));
  }, [league]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  console.log(Object.values(matches));
  return (
    <div className='scoreBoard'>
      {matches && Object.values(matches).map((match) => (
        <div key={match} className='scoreBoard_accordion'>
          <Accordion
            square
            expanded={expanded === match}
            onChange={handleChange(match)}
          >
            <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
              {match.away.score}
              <Typography
                className='scoreBoard_match-title'
              >
                {match.away.teamID}
                {' '}
                vs
                {' '}
                {match.home.teamID}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>

              <ScoreBoardTable />

            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export default ScoreBoard;
