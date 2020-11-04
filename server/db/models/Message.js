module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    words: {
      type: DataTypes.STRING
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
