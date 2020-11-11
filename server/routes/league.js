/* eslint-disable camelcase */
const { Router } = require('express');

const leagueRouter = Router();

const {
  League,
  League_user,
  User
} = require('../db/index');

// add user to League UserIDs is an array
// todo: fix header error (post still works)
leagueRouter.post('/addUser', (req, res) => {
  const { userID, leagueID } = req.body;
  League_user.create({
    id_league: leagueID,
    id_user: userID,
    bank_balance: 1000000,
    net_worth: 0,
    record: '0-0'
  }).then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send(err);
    });
  return 'success';
});

// find all users in the league by league id
leagueRouter.get('/league/:leagueID', (req, res) => {
  const { leagueID } = req.params;

  League.findAll({
    where: { id: leagueID }, include: [{ model: User }]
  }).then((response) => res.send(response[0].dataValues.users));
});

// find one league by id with all information plus users

leagueRouter.get('/oneleague/:leagueID', (req, res) => {
  const { leagueID } = req.params;

  League.findOne(
    {
      where: {
        id: leagueID
      },
      include: [{ model: User }]
    }
  )
    .then((leagueInfo) => res.send(leagueInfo))
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

leagueRouter.get('/', (req, res) => {
  League.findAll().then((response) => res.send(response)).catch((err) => res.send(err));
});

// create a league route
leagueRouter.post('/', (req, res) => {
  const { league_name, id_owner } = req.body;
  const settings = {
    date_end: null, // date / it follows
    lengthMatch: null, // integer (number of days) (defaulting to 7)
    numberOfMatches: null, // integer
    numberOfTeams: null, // integer
    numberOfTeamsPlayoffs: null, // Integer / default 10,000,00 (remember extra )
    date_start: null, // date /defaults: next monday '''''' calculate
    startingBank: null, // Integer / default 10,000,00 (remember extra )
    schedule: {
      currentWeek: null,
      weeklyMatchups: null
    }
  };
  League.create({
    league_name,
    id_owner,
    settings
  }).then((leagueInfo) => {
    const responseLeagueInfo = { ...leagueInfo.dataValues };
    League_user.create({
      id_user: responseLeagueInfo.id_owner,
      id_league: responseLeagueInfo.id,
      bank_balance: 1000000,
      net_worth: null,
      record: null
    });
    res.send(responseLeagueInfo);
  })
    .catch((err) => {
      console.warn(err);
      res.status(500).send(err);
    });
});

// TODO: settings lock after week 1 starts
leagueRouter.put('/', (req, res) => {
  const {
    id_league, league_name, id_owner, settings
  } = req.body;
  const newSettings = {
    date_end: settings.endDate || null, // date / it follows
    lengthMatch: settings.lengthMatches || null, // integer (number of days) (defaulting to 7)
    numberOfMatches: settings.numberMatches || null, // integer
    numberOfTeams: settings.numberTeams || null, // integer
    numberOfTeamsPlayoffs: settings.numberTeamsPlayoffs || null,
    // Integer / default 10,000,00 (remember extra )
    date_start: settings.startDate || null, // date /defaults: next monday '''''' calculate
    startingBank: settings.startingBank || null, // Integer / default 10,000,00 (remember extra )
    schedule: {
      // TODO: schedule generator
      currentWeek: null,
      weeklyMatchups: null
    }
  };
  League.update({ league_name, settings: newSettings, id_owner },
    {
      where: {
        id_league
      }
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send(err);
    });
  res.send(newSettings);
});

// TODO: Indiviual user joins a league

// Add an array of users to a league (deletes any users
// already in league that are not included in the sent array)
leagueRouter.put('/users', (req, res) => {
  const { userIDs, leagueID } = req.body;
  League_user.findAll({
    where: {
      id_league: leagueID
    }
  })
    .then((joins) => {
      const existingIDs = [];
      // eslint-disable-next-line array-callback-return
      joins.map((join) => {
        existingIDs.push(join.dataValues.id_user);
      });
      // eslint-disable-next-line array-callback-return
      existingIDs.map((existingID) => {
        if (!userIDs.includes(existingID)) {
          League_user.destroy({
            where: {
              id_league: leagueID,
              id_user: existingID
            }
          })
            .catch((err) => {
              console.warn(err);
              res.status(500).send(err);
            });
        }
      });
      // eslint-disable-next-line array-callback-return
      userIDs.map((userID) => {
        if (!existingIDs.includes(userID)) {
          // TODO: Networth to balance plus shares so start at ten?
          League_user.create({
            bank_balance: 1000000,
            net_worth: 0,
            record: '0-0',
            id_league: leagueID,
            id_user: userID
          })
            .catch((err) => {
              console.warn(err);
              res.status(500).send(err);
            });
        }
      });
      res.send(userIDs);
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send(err);
    });
  // won't log the adds and deletes atm
});
// put league route settings required
// put for users added to league
// where do i do schedule?
// on league post? Shuffle team number
// apply to standard

// find league by id and user
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
    console.warn(err);
    res.status(500).send(err);
  });
});

module.exports = {
  leagueRouter
};

// todo: delete league
// todo: add user to league
