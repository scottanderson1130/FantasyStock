/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
// const axios = require('axios');
const { Router } = require('express');
// const { Op } = require('sequelize');

const {
  Stock,
  Portfolio
} = require('../db/index');

const stockRouter = Router();

// get all stock info
stockRouter.get('/', (req, res) => {
  Stock.findAll()
    .then((stocks) => {
      res.send(stocks);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// get stock info by stock primary key id
stockRouter.get('/stock/:stockID', (req, res) => {
  const { stockID } = req.params;
  Stock.findByPk(stockID)
    .then((stock) => {
      res.send(stock);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

// get user's portfolio info by user primary key id
stockRouter.get('/portfolio/:userID', (req, res) => {
  const { userID } = req.params;
  Portfolio.findAll({
    where: {
      id_user: userID
    }
  })
    .then((portfolio) => {
      res.send(portfolio);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = {
  stockRouter
};
