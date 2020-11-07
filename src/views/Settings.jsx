import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectUser } from '../features/userSlice.js';
import { selectLeague, selectLeagueOwner } from '../features/leagueSlice.js';
import SettingsLeague from '../components/Settings/SettingsLeague.jsx';
import '../css/Settings.css';

function Settings() {
  const [myLeague, setMyLeague] = useState({});
  const league = useSelector(selectLeague);
  const leagueOwner = useSelector(selectLeagueOwner);
  const user = useSelector(selectUser);

  useEffect(() => {
    async function fetchLeague() {
      const response = await axios.get(`/league/${league}/${user?.id}`);
      setMyLeague(response.data);
      return response;
    }
    fetchLeague();
  }, [league, user]);

  return (

    <div
      className={user.id === leagueOwner ? 'settings_league' : null}
    >
      {/* {user.id === leagueOwner && */}
      <SettingsLeague myLeague={myLeague} />
      {/* } */}
    </div>
  );
}

export default Settings;
