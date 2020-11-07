module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define('league', {
    league_name: {
      type: DataTypes.STRING
    },
    settings: {
      type: DataTypes.JSONB
    }
  }, {
    freezeTableName: true
  });

  League.associate = (models) => {
    League.belongsToMany(models.User, {
      through: models.League_user,
      foreignKey: 'id_league'
    });
    League.belongsTo(models.User, {
      foreignKey: 'id_owner',
      constraints: false
    });
  };
  return League;
};

// Settings Template:
// settings: {
//   number_teams: integer
//   length_matches: integer (number of days) (defaulting to 7)
//   number_matches: integer
//   start_date: date /defaults: next monday '''''' calculate
//   end_date: date / it follows
//   number_teams_playoffs: Integer / default top 40%, will be specific to the numbers options
//   starting_bank: Integer / default 10,000,00 (remember extra )
// }
