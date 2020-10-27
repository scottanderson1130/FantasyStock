import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import '../css/ScoreBoard.css';
import ScoreBoardTable from '../components/ScoreBoard/ScoreBoardTable.jsx';

const MATCHES = [
  { id: 1, team1: 'The Rogers', team2: 'The Growlers' },
  { id: 2, team1: 'Avengers', team2: 'Bears' },
  { id: 3, team1: 'Cucumbers', team2: 'The Lines' },
  { id: 4, team1: 'The Gardeners', team2: 'Quick Rabbit' },
  { id: 5, team1: 'Iron Men', team2: 'Renegades' },
  { id: 6, team1: 'Bar Hoppers', team2: 'Home Team' }

];

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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='scoreBoard'>
      {MATCHES.map((match) => (
        <div key={match.id} className='scoreBoard_accordion'>
          <Accordion
            square
            expanded={expanded === match.id}
            onChange={handleChange(match.id)}
          >
            <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
              <Typography
                className='scoreBoard_match-title'
              >
                <strong>{match.team1}</strong>
                {' '}
                vs
                {' '}
                <strong>{match.team2}</strong>
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
