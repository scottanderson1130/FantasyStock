/* eslint-disable camelcase */
module.exports = (sequelize, DataTypes) => {
  // user meets stock meets league
  const Stock_user = sequelize.define('stock_user', {
    // this will contain shares & price per share for each stock input?
    portfolio: {
      type: DataTypes.JSONB
    }
  }, {
    freezeTableName: true
  });

  Stock_user.associate = (models) => {
    Stock_user.belongsTo(models.League, {
      foreignKey: 'id_league'
    });
  };
  // Portfolio.associate = (models) => {
  //   Portfolio.belongsTo(models.Stock, {
  //     foreignKey: 'id_stock'
  //   });
  // };
  return Stock_user;
};
