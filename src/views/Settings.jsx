import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectUser } from '../features/userSlice.js';
import { selectLeague } from '../features/leagueSlice.js';

function Settings() {
  const [myLeague, setMyLeague] = useState({});
  const league = useSelector(selectLeague);
  const user = useSelector(selectUser);

  useEffect(() => {
    async function fetchLeague() {
      const response = await axios.post(`/league/${league}`, { id_owner: user?.id });
      setMyLeague(response.data);
      return response;
    }
    fetchLeague();
  }, [league, user]);

  return (
    <div>
      <h1>
        League Name:
        {myLeague?.league_name}
      </h1>
      <p>
        Bank Balance:
        {myLeague?.bank_balance}
      </p>
      <p>Length of Match (day, week)</p>
    </div>
  );
}

export default Settings;
