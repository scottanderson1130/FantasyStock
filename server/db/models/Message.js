module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    words: {
      type: DataTypes.STRING
    },
    date_created: {
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: true
  });

  Message.associate = (models) => {
    Message.belongsTo(models.League, {
      foreignKey: 'id_league'
    });
    Message.belongsTo(models.User, {
      foreignKey: 'id_user'
    });
  };
  return Message;
};
