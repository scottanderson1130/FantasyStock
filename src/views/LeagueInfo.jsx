import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { selectLeague } from '../features/leagueSlice.js';
import '../css/LeagueInfo.css';

function LeagueInfo() {
  const league = useSelector(selectLeague);
  const [leagueInfo, setLeagueInfo] = useState([]);
  const [owner, setOwner] = useState({});
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    axios.get(`league/oneleague/${league}`)
      .then((response) => setLeagueInfo(response.data));
  }, [league]);

  useEffect(() => {
    axios.get(`/user/user/${leagueInfo?.id_owner}`)
      .then((response) => setOwner(response.data));
  }, [leagueInfo]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='leagueInfo'>
      {league
        ? (
          <Card>
            <CardContent>
              <div className='leagueInfo_info'>
                <h1 className='leagueInfo_title'>League Info</h1>
                <h4>League Name: </h4>
                <p>{leagueInfo.league_name}</p>
                <h4>League Owner: </h4>
                <p>{owner?.username}</p>
              </div>
              <Accordion
                square
                expanded={expanded === 'leagueMembers'}
                onChange={handleChange('leagueMembers')}
              >
                <AccordionSummary
                  aria-controls='panel1d-content'
                  id='panel1d-header'
                >
                  <Typography
                    className='leagueInfo_members'
                  >
                    League Members
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {leagueInfo?.users?.map((user) => (
                      <ul>
                        <li>
                          Team Name:
                          <p>{user.league_user.team_name}</p>
                          <p>{user?.username}</p>
                        </li>
                      </ul>
                    ))}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>

        )
        : (
          <Link key='home' to='/'>
            <h3 className='leagueInfo_selectLeague'>Please select a League</h3>
          </Link>
        )}
    </div>
  );
}

export default LeagueInfo;
