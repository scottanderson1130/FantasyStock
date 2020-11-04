import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Input, Button
} from '@material-ui/core';
import '../../css/SettingsLeague.css';

function SettingsLeague({ myLeague }) {
  SettingsLeague.propTypes = {
    myLeague: PropTypes.shape({
      league_name: PropTypes.string,
      bank_balance: PropTypes.string
    }).isRequired
  };

  const [leagueForm, setLeagueForm] = useState({
    starting_bank: '',
    start_date: '',
    end_date: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleStartingBanks = (e) => {
    setLeagueForm({ ...leagueForm, starting_bank: e.target.value });
  };
  const handleStartDate = (e) => {
    setLeagueForm({ ...leagueForm, start_date: e.target.value });
  };
  const handleEndDate = (e) => {
    setLeagueForm({ ...leagueForm, end_date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (leagueForm.starting_bank && leagueForm.start_date && leagueForm.end_date) {
      setValid(true);
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div>
      <h2>League Settings</h2>
      <h1>
        League Name:
        {myLeague?.league_name}
      </h1>
      <div className='settingsLeague_form'>
        <form onSubmit={handleSubmit}>
          {submitted && valid ? <div className='success-message'>Success! Your settings have been updated</div> : null}
          <Input
            values={leagueForm.starting_bank}
            type='number'
            placeholder='starting bank'
            name='startingBank'
            onChange={handleStartingBanks}
          />
          {!submitted && !leagueForm.starting_bank ? <span> Please enter a number</span> : null}
          <Input
            values={leagueForm.start_date}
            placeholder='starting date'
            type='date'
            name='startDate'
            onChange={handleStartDate}
          />
          {!submitted && !leagueForm.start_date ? <span> Please enter a date</span> : null}
          <Input
            values={leagueForm.end_date}
            placeholder='end date'
            name='endDate'
            type='date'
            onChange={handleEndDate}
          />
          {!submitted && !leagueForm.end_date ? <span> Please enter a date</span> : null}
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default SettingsLeague;
