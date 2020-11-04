/* eslint-disable camelcase */
const { Router } = require('express');

const leagueRouter = Router();

const {
  League,
  League_user
} = require('../db/index');

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
leagueRouter.post('/:leagueID', (req, res) => {
  const { leagueID } = req.params;
  const { id_owner } = req.body;

  League.findOne({
    where: {
      id: leagueID,
      id_owner
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
