/* eslint-disable camelcase */

const {
  // Stock,
  Stock_user,
  League_user
} = require('../db/index');

const checkSharesAvailable = (id_stock, id_league) => {
  let sharesAvailable = 100;
  Stock_user.findAll({
    where: {
      id_stock, id_league
    }
  })
    .then((joins) => {
      joins.map((entry) => {
        sharesAvailable -= entry.portfolio.shares;
        return '';
      });
      return sharesAvailable;
    });
};
const checkMoneyAvailable = async (id_league, id_user) => {
  let moneyAvailable;
  await League_user.findAll({
    where: {
      id_league, id_user
    }
  })
    .then((joint) => {
      console.log('joint', joint[0].dataValues.bank_balance);
      moneyAvailable = joint[0].dataValues.bank_balance;
      console.log(32, moneyAvailable);
    });
  console.log(33, moneyAvailable);
  return moneyAvailable;
};

module.exports = {
  checkMoneyAvailable,
  checkSharesAvailable
};
