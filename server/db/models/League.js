module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define('league', {
    league_name: {
      type: DataTypes.STRING
    },
    settings: {
      type: DataTypes.JSON
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
      foreignKey: 'id_owner'
    });
  };
  return League;
};
