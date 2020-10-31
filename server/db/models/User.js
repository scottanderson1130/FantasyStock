module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    // net worth more specific? stocks and bank?
    // bank balance needs to be a join table with league
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    // use email for now
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    full_name: {
      type: DataTypes.STRING
    },
    // phone_number: {
    //   type: DataTypes.STRING
    // },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg'
    }
  }, {
    freezeTableName: true
  });
  User.associate = (models) => {
    User.belongsToMany(models.League, {
      through: models.League_user,
      foreignKey: 'id_user'
    });
    User.belongsToMany(models.Stock, {
      through: models.Stock_user,
      foreignKey: 'id_user'
    });
  };

  return User;
};
