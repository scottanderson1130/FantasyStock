import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { selectLeague } from '../features/leagueSlice.js';
import '../css/LeagueInfo.css';
import CardLeagueMembers from '../components/LeagueInfo/CardLeagueMembers.jsx';
import AccordionComp from '../components/AccordionComp.jsx';

function LeagueInfo() {
  const league = useSelector(selectLeague);
  const [leagueInfo, setLeagueInfo] = useState([]);
  const [owner, setOwner] = useState({});

  useEffect(() => {
    axios.get(`league/oneleague/${league}`)
      .then((response) => setLeagueInfo(response.data));
  }, [league]);

  useEffect(() => {
    axios.get(`/user/user/${leagueInfo?.id_owner}`)
      .then((response) => setOwner(response.data));
  }, [leagueInfo]);

  const Component = () => (
    <CardLeagueMembers
      leagueInfo={leagueInfo}
    />
  );

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
              <AccordionComp Component={Component} title='League Members' />
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
