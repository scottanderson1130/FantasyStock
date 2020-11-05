/* eslint-disable camelcase */
const { Router } = require('express');
const { Message } = require('../db/index');

const messageRouter = Router();

messageRouter.get('/:leagueID', (req, res) => {
  const { leagueID } = req.params;
  Message.findAll({ where: { id_league: leagueID } })
    .then((messages) => res.send(messages));
});

messageRouter.post('/', (req, res) => {
  const {
    id_league, words, id_user, username
  } = req.body;
  Message.create({
    id_league, id_user, words, username
  })
    .then((response) => res.send(response))
    .catch((error) => console.error(error));
});

module.exports = { messageRouter };
