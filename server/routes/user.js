/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
// const axios = require('axios');
const { Router } = require('express');
const { Op } = require('sequelize');

const {
  // Stock,
  // Portfolio,
  League_user,
  User
} = require('../db/index');

const userRouter = Router();

// get all users in a league by userID
userRouter.get('/league/user/:userID', (req, res) => {
  const { userID } = req.params;
  const leagueIDs = [];
  // const leagueInfo = [];
  League_user.findAll({
    where: {
      id_user: userID
    }
  })
    .then((leagueUserInfo) => {
      leagueUserInfo.map((data) => {
        leagueIDs.push(data.id_league);
      });
      League_user.findAll({
        where: {
          id_league: { [Op.or]: leagueIDs }
        }
      })
        .then((usersInfo) => {
          res.send(usersInfo);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
userRouter.get('/test', (req, res) => {
  User.findAll({
    where: {
      id: 1
    }
  })
    .then((result) => {
      res.send(result);
    });
});

// // get stock info by stock primary key id
// stockRouter.get('/stock/:stockID', (req, res) => {
//   const { stockID } = req.params;
//   Stock.findByPk(stockID)
//     .then((stock) => {
//       res.send(stock);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send(err);
//     });
// });

// // get user's portfolio info by user primary key id
// stockRouter.get('/portfolio/:userID', (req, res) => {
//   const { userID } = req.params;
//   Portfolio.findAll({
//     where: {
//       id_user: userID
//     }
//   })
//     .then((portfolio) => {
//       res.send(portfolio);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send(err);
//     });
// });

module.exports = {
  userRouter
};
