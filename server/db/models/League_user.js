/* eslint-disable camelcase */
module.exports = (sequelize, DataTypes) => {
  const League_user = sequelize.define('league_user', {
    bank_balance: {
      type: DataTypes.INTEGER
    },
    net_worth: {
      type: DataTypes.INTEGER
    },
    record: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });

  return League_user;
};

// record?

// NOTE: INTEGER is money including cents. move decimal two points over essentially.
// Increases accuracy in real world figures as well as speed of calculation
// Question: what happens to lost fractions? Essentially rounding errors??
