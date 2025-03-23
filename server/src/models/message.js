const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  Message.init(
    {
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Message',
    },
  );
  return Message;
};
