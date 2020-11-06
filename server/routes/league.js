/* eslint-disable camelcase */
const { Router } = require('express');

const leagueRouter = Router();

const {
  League,
  League_user,
  User
} = require('../db/index');

// get User and League data with User id
leagueRouter.get('/:userID', (req, res) => {
  const { userID } = req.params;

  User.findAll({
    where: { id: userID }, include: [{ model: League }]
  }).then((response) => res.send(response));
});

// create a league route
leagueRouter.post('/', (req, res) => {
  const { league_name, id_owner } = req.body;

  League.create({
    league_name,
    id_owner
  }).then((leagueInfo) => {
    const responseLeagueInfo = { ...leagueInfo.dataValues };
    League_user.create({
      id_user: responseLeagueInfo.id_owner,
      id_league: responseLeagueInfo.id
    });
    res.send(responseLeagueInfo);
  })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

// league by id
leagueRouter.get('/:leagueID/:userID', (req, res) => {
  const { leagueID, userID } = req.params;

  League.findOne({
    where: {
      id: leagueID,
      id_owner: userID
    }
  }).then((league) => {
    const responseLeague = { ...league.dataValues };
    League_user.findOne({
      where: {
        id_league: leagueID
      }
    })
      .then((leagueInfo) => {
        responseLeague.leagueUser = leagueInfo;
        res.send(responseLeague);
      });
  }).catch((err) => {
    console.error(err);
    res.status(500).send(err);
  });
});

module.exports = {
  leagueRouter
};
