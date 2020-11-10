import React from 'react';
import PropTypes from 'prop-types';

function League({ leagueName }) {
  League.propTypes = {
    leagueName: PropTypes.string.isRequired
  };
  return (
    <div>
      {leagueName}
    </div>
  );
}

export default League;
