module.exports = (sequelize, DataTypes) => {
  // user meets stock meets league
  const Portfolio = sequelize.define('portfolio', {
    shares: {
      type: DataTypes.INTEGER
    },
    price_per_share_at_purchase: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true
  });
  Portfolio.associate = (models) => {
    Portfolio.belongsTo(models.League, {
      foreignKey: 'id_league'
    });
  };

  return Portfolio;
};
