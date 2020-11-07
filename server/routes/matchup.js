/* eslint-disable camelcase */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const { Router } = require('express');
// const { array } = require('prop-types');

const matchupRouter = Router();

const {
  League,
  League_user,
  // User,
  Stock,
  Stock_user
} = require('../db/index');

matchupRouter.get('/:leagueID', async (req, res) => {
  const { leagueID } = req.params;
  const stockInfo = {};
  const currentMatchups = await League.findByPk(
    leagueID
  )
    .then((league) => {
      const weekNumber = `week${league.dataValues.settings.schedule.currentWeek}`;
      const currentMatchupsValues = {
        ...league.dataValues.settings.schedule.weeklyMatchups[weekNumber]
      };
      return currentMatchupsValues;
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
  const users = await League_user.findAll({
    where: {
      id_league: leagueID
    }
  }).then(((leagueUsers) => [...leagueUsers]))
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
  users.map(async (user) => {
    const userID = user.dataValues.id_user;
    const tempo = {};
    tempo.userID = await Stock_user.findAll({
      where: {
        id_user: userID, id_league: leagueID
      }
    })
      .then(async (joinObjects) => {
        joinObjects.map(async (indStock) => {
          const stockID = indStock.dataValues.id_stock;
          const tempHolder = await Stock.findByPk(stockID);
          stockInfo[indStock.dataValues.id_user] = await tempHolder.dataValues;
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
    for (const match in currentMatchups) {
      const awayID = currentMatchups[match].away.teamID;
      const homeID = currentMatchups[match].home.teamID;
      if (userID === awayID) {
        currentMatchups[match].away.teamInfo = user.dataValues;
        currentMatchups[match].away.stocks = stockInfo.userID;
      } else if (userID === homeID) {
        currentMatchups[match].home.teamInfo = user.dataValues;
        currentMatchups[match].home.stocks = stockInfo.userID;
      }
    }
  });
  setTimeout(() => {
    res.send(currentMatchups);
  }, 100);
  // res.send(currentMatchups)
});

// TODO: matchup getter for other weeks (history)

// put league route required
// put for users added to league
// const schedule = {
//   currentWeek: 'integer',
//   weeklyMatchups: {
//     week1 : {
//       teams: {
//         [{Home: {
//           teamID: 1,
//           teamName: 'grab this from database on build schedule on league submit',
//           score: 'integer'
//         },
//         Away: {
//           teamId: 3,
//           teamName: 'name',
//           score: 'integer'
//         }},
//         {Home: {
//           teamID: 2,
//           teamName: 'grab this from database on build schedule on league submit',
//           score: 'integer'
//         },
//         Away: {
//           teamId: 4,
//           teamName: 'name',
//           score: 'integer'
//         }},
//       ]
//       }
//     },
//     week2: {
//       teams: {
//         Home: {
//           teamID: 1,
//           teamName: 'grab this from database on build schedule on league submit',
//           score: 'integer'
//         },
//         Away: {
//           teamId: 3,
//           teamName: 'name',
//           score: 'integer'
//         }
//       }
//     },
//     last3: {
//       teams: {
//         Home: {
//           teamID: 1,
//           teamName: 'grab this from database on build schedule on league submit',
//           score: 'integer'
//         },
//         Away: {
//           teamId: 3,
//           teamName: 'name',
//           score: 'integer'
//         }
//       }
//     } // last week
//   }
// }
// //where do i do schedule?
// // on league post? Shuffle team number
// // apply to standard
// // can build shuffler later
// // what is the format of the schedule aspect?

module.exports = {
  matchupRouter
};
