/* eslint-disable camelcase */
module.exports = (sequelize) => {
  const League_user = sequelize.define('league_user', {
  }, {
    freezeTableName: true
  });

  return League_user;
};

// record?
