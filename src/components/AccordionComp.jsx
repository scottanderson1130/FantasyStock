import {
  Accordion, AccordionDetails, AccordionSummary, Typography
} from '@material-ui/core';
import React, { useState } from 'react';
import propTypes from 'prop-types';

function AccordionComp({ Component, title }) {
  AccordionComp.propTypes = {
    Component: propTypes.func.isRequired,
    title: propTypes.string.isRequired
  };

  const [expanded, setExpanded] = useState(false);

  const handleAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
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
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Component()}
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionComp;
