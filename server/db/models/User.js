module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    bank_balance: {
      type: DataTypes.INTEGER,
    },
    net_worth: {
      type: DataTypes.INTEGER,
    },
  }, {
    freezeTableName: true,
  });
  //NOTE: INTEGER is money including cents. move decimal two points over essentially. Increases accuracy in real world figures as well as speed of calculation
  // Question: what happens to lost fractions? Essentially rounding errors??
  User.associate = (models) => {
    User.belongsToMany(models.League, {
      through: models.League_user,
      foreignKey: 'id_user',
    });
    User.belongsToMany(models.Stock, {
      through: models.Portfolio,
      foreignKey: 'id_user',
    });
  };
  

  return User;
};