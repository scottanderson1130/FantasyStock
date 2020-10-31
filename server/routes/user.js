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

// // get user's Info by user google id
// userRouter.get('/:userID', (req, res) => {
//   const { userID } = req.params;
//   User.findAll({
//     where: {
//       id: userID
//     }
//   })
//     .then((userInfo) => {
//       // tack on leagues?
//       // const exist = true;
//       const responseUserInfo = { ...userInfo[0].dataValues };
//       League_user.findAll({
//         where: {
//           id_user: userID
//         }
//       })
//         .then((leagueInfo) => {
//           responseUserInfo.leagueInfo = leagueInfo;
//           res.send(responseUserInfo);
//         });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send(err);
//     });
// });

// user route.
userRouter.post('/', (req, res) => {
  const {
    id, username, full_name, avatar
  } = req.body;
  User.findOrCreate({
    where: {
      id
    },
    defaults: {
      full_name, username, avatar
    }
  })
    .then((userInfo) => {
      const responseUserInfo = { ...userInfo[0].dataValues };
      League_user.findAll({
        where: {
          id_user: id
        }
      })
        .then((leagueInfo) => {
          responseUserInfo.leagueInfo = leagueInfo;
          res.send(responseUserInfo);
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});
// don't use yet. Not done
userRouter.put('/', (req, res) => {
  const {
    id, username, full_name, avatar
  } = req.body;
  User.update({
    full_name, username, avatar
  },
  {
    where: {
      id
    }
  })
    .then((newUser) => {
      res.status(201).send(newUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

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

module.exports = {
  userRouter
};
