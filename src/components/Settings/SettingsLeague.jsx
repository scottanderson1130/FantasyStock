import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Input, Button
} from '@material-ui/core';
import axios from 'axios';
import AddMembers from './AddMembers.jsx';
import '../../css/SettingsLeague.css';

const inputsForm = [
  {
    description: '# of teams',
    type: 'number',
    name: 'numberTeams'
  },
  {
    description: 'matches number of days',
    type: 'number',
    name: 'lengthMatches'
  },
  {
    description: '# of matches',
    type: 'number',
    name: 'numberMatches'
  },
  {
    description: 'start date',
    type: 'date',
    name: 'startDate'
  },
  {
    description: 'end date',
    type: 'date',
    name: 'endDate'
  },
  {
    description: '# of playoff teams',
    type: 'number',
    placeholder: '# of playoff teams',
    name: 'numberTeamsPlayoffs'
  },
  {
    description: 'starting bank',
    type: 'number',
    placeholder: 'starting bank',
    name: 'startingBank'
  }
];

function SettingsLeague({ myLeague }) {
  SettingsLeague.propTypes = {
    myLeague: PropTypes.shape({
      league_name: PropTypes.string,
      bank_balance: PropTypes.string,
      id: PropTypes.string
    }).isRequired
  };

  const [leagueForm, setLeagueForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [leagueUsers, setLeagueUsers] = useState([]);

  useEffect(() => {
    axios.get(`/league/league/${myLeague.id}`)
      .then((response) => setLeagueUsers(response.data));
  }, [myLeague.id]);

  const handleChange = (e) => setLeagueForm({ ...leagueForm, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className='settingsLeague'>
      <h2 className='settingsLeague_title'>League Settings</h2>
      <h3 className='settingsLeague_leagueName'>
        {`League Name: ${myLeague?.league_name}`}
      </h3>
      <div>
        <form className='settingsLeague_form' onSubmit={handleSubmit}>
          {submitted && <div className='success-message'>Success! Your settings have been updated</div>}
          {inputsForm.map(({
            description, type, name
          }) => (
            <div
              className='settingsLeague_settingBox'
            >
              <p>{description}</p>
              <Input
                key={name}
                type={type}
                name={name}
                onChange={handleChange}
              />
            </div>
          ))}
          <Button
            className='settingsLeague_formButton'
            variant='contained'
            color='primary'
            type='submit'
          >
            Submit
          </Button>
        </form>
        <div className='settingsLeague_addMembers'>
          <AddMembers leagueUsers={leagueUsers} setLeagueUsers={setLeagueUsers} />
        </div>
      </div>
    </div>
  );
}

export default SettingsLeague;
