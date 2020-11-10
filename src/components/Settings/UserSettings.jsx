import {
  Accordion, AccordionDetails, AccordionSummary, Button, Input, Typography
} from '@material-ui/core';
import React, { useState } from 'react';

function UserSettings() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='userSettings'>
      <Accordion
        square
        expanded={expanded === 'leagueSettings'}
        onChange={handleAccordion('leagueSettings')}
      >
        <AccordionSummary
          aria-controls='panel1d-content'
          id='panel1d-header'
        >
          <Typography className='leagueInfo_members'>
            User Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Input
              variant='outlined'
              type='text'
              value=''
              onChange=''
            />
            <Button
              variant='contained'
              color='primary'
              type='submit'
              onClick=''
              disabled=''
            >
              add
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default UserSettings;
