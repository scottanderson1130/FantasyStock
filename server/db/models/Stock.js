module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('stock', {
    ticker: {
      type: DataTypes.STRING,
      unique: true
    },
    company_name: {
      type: DataTypes.STRING,
      unique: true
    },
    current_price_per_share: {
      type: DataTypes.INTEGER
    },
    date_updated: {
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: true
  });
  Stock.associate = (models) => {
    Stock.belongsToMany(models.User, {
      through: models.Portfolio,
      foreignKey: 'id_stock'
    });
  };

  return Stock;
};
