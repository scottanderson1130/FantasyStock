/* eslint-disable camelcase */
const { Router } = require('express');

const leagueRouter = Router();

const {
  League,
  League_user,
  User
} = require('../db/index');

// add user to League
leagueRouter.post('/addUser', (req, res) => {
  const { userID, leagueID } = req.body;
  League_user.create({
    id_league: leagueID,
    id_user: userID,
    bank_balance: 1000000,
    net_worth: 0,
    record: '0-0'
  })
    .then((response) => res.send(response))
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

// get User and League data with User id
leagueRouter.get('/:userID', (req, res) => {
  const { userID } = req.params;

  User.findAll({
    where: { id: userID }, include: [{ model: League }]
  }).then((response) => res.send(response));
});

// create a league route
leagueRouter.post('/', (req, res) => {
  const { league_name, id_owner, settings } = req.body;
  // Settings Template:
  // settings: {
  //   number_teams: integer
  //   length_matches: integer (number of days) (defaulting to 7)
  //   number_matches: integer
  //   start_date: date /defaults: next monday '''''' calculate
  //   end_date: date / it follows
  //   number_teams_playoffs: Integer / default top 40%, will be specific to the numbers options
  //   starting_bank: Integer / default 10,000,00 (remember extra )
  //   schedule: {
  // currentWeek: val?,
  //  Weekly matchup []
  // }
  // }
  // where do i do schedule?
  // on league post? Shuffle team number
  // apply to standard
  // can build shuffler later
  // what is the format of the schedule aspect?
  League.create({
    league_name,
    id_owner,
    settings
    // then whatever changes needed here.
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
// put league route required
// put for users added to league

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

// todo: delete league
// todo: add user to league
