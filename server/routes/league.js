/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const { Router } = require('express');

const leagueRouter = Router();

const {
  League
} = require('../db/index');

leagueRouter.post('/', (req, res) => {
  const { league_name, id_owner } = req.body;

  League.create({
    league_name,
    id_owner
  }).then(() => {
    res.send('created');
  });
});

module.exports = {
  leagueRouter
};
