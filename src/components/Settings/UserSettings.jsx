import React from 'react';
import AccordionComp from '../AccordionComp.jsx';
import CardUserSettings from './CardUserSettings.jsx';

function UserSettings() {
  const Component = () => (
    <CardUserSettings />
  );

  return (
    <div className='userSettings'>
      <AccordionComp Component={Component} title='User Settings' />
    </div>
  );
}

export default UserSettings;
