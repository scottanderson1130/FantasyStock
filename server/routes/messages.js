/* eslint-disable camelcase */
require('dotenv').config();
const { Router } = require('express');
const Pusher = require('pusher');
const { Message } = require('../db/index');

const messageRouter = Router();

const pusher = new Pusher({
  appId: process.env.PUSHER_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.CLUSTER,
  useTLS: true
});

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
    .then((response) => {
      pusher.trigger('messages', 'inserted', {
        id_league: response.id_league,
        id_user: response.id_user,
        words: response.words,
        username: response.username
      });
      res.send('message sent');
    })
    .catch((error) => console.error(error));
});

module.exports = { messageRouter };
