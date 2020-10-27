module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('portfolio', {
    shares: {
      type: DataTypes.INTEGER,
      unique: true
    },
    price_per_share_at_purchase: {
      type: DataTypes.INTEGER,
      unique: true
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
