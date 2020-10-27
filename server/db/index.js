/* eslint-disable camelcase */
const { Sequelize } = require('sequelize');
require('dotenv').config();

const user = process.env.DB_USERNAME;
const host = process.env.DB_HOST;
const database = process.env.DB_DBNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'postgres',
  port,
  logging: false,
});

// const HistoryModel = require('../History');
const LeagueModel = require('../League');
const MessageModel = require('../Message');
const PortfolioModel = require('../Portfolio');
const StockModel = require('../Stock');
const UserModel = require('../User');
const League_userModel = require('../League_user')

// const History = HistoryModel(sequelize, Sequelize);
const League = LeagueModel(sequelize, Sequelize);
const Message = MessageModel(sequelize, Sequelize);
const Portfolio = PortfolioModel(sequelize, Sequelize);
const Stock = StockModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const League_user = League_userModel(sequelize, Sequelize);

const models = {
  History,
  League,
  Message,
  Portfolio,
  Stock,
  User,
  League_user
};

Object.keys(models).forEach((model) => {
  if (models[model].associate) {
    models[model].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;
module.exports = models;
