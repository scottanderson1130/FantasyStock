import { Button, Input, Typography } from '@material-ui/core';
import React from 'react';
import propTypes from 'prop-types';

function CardSettingsL({
  handleChange,
  handleSubmit,
  submitted,
  myLeague,
  inputsForm
}) {
  CardSettingsL.propTypes = {
    handleChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
    submitted: propTypes.string.isRequired,
    myLeague: propTypes.string.isRequired,
    inputsForm: propTypes.string.isRequired
  };

  return (
    <Typography>
      <h3 className='settingsLeague_leagueName'>
        {`League Name: ${myLeague?.league_name}`}
      </h3>
      <div>
        <form className='settingsLeague_form' onSubmit={handleSubmit}>
          {submitted && <div className='success-message'>Success! Your settings have been updated</div>}
          {inputsForm?.map(({
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
      </div>
    </Typography>
  );
}

export default CardSettingsL;
