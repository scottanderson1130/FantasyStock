const { Router } = require('express');
const { Message } = require('../db/index');

const messageRouter = Router();

// messageRouter.get('/:leagueID', (req, res) => {
// });

messageRouter.get('/:leagueID', (req, res) => {
  const { leagueID } = req.params;
  Message.findOne({ where: { id_league: leagueID } }).then((response) => res.send(response));
});

// messageRouter.put('/:leagueID', (req, res) => {});
