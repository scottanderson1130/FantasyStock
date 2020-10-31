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

// get all stocks in a league for waiver
// need to do axios subroutine to update stock folder
// need to grab all stocks

// axios call to update stock info
// query stock to get the top 500
// query Portfolio to get the correct share information
// query League to get the number of Shares/stock for the league
// calculate the shares available
stockRouter.get('/waivers/:leagueID', (req, res) => {
  const { leagueID } = req.params;
  const waivers = [];
  // axios call to update Stock first. then do the findall
  Stock.findAll()
    .then((allStocks) => {
      // allStocks is an array of objects (stocks from stock) at this point
      // need to calculate shares
      Portfolio.findAll({
        where: {
          id_league: leagueID
        }
      })
        .then((port) => {
          // port is array of objects, each object is the port entry
          // this is the point where I query the league to do the math.
          // for now operating with all 100's for share
          // do a map. subtract shares of portfolio that match id_stock and
          // push an entry to waivers of Stock with added shares left
          allStocks.map((indStock) => {
            const updatedStock = { ...indStock.dataValues };
            updatedStock.sharesRemaining = 100;
            port.map((indPortEntry) => {
              if (indStock.id === indPortEntry.id_stock) {
                updatedStock.sharesRemaining -= indPortEntry.shares;
              }
            });
            waivers.push(updatedStock);
          });
        })
        .then(() => {
          res.send(waivers);
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

stockRouter.post('/waivers', (req, res) => {
  const {
    id_stock, price_per_share_at_purchase, id_league, id_user, shares
  } = req.body;
  // need to do a standard find. and then if block. if exists count shares and a
  Portfolio.create({
    id_stock, price_per_share_at_purchase, id_league, id_user, shares
  })
    .then((entry) => {
      res.send(entry);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

// need a sell option
// do I need an additional field? no. maybe a negative for the shares to indicate sell?

// can't do multiple entries with same user and stock id.
// This is a problem for multiple purchases at different prices....
stockRouter.post('/waivers', (req, res) => {
  const {
    id_stock, price_per_share_at_purchase, id_league, id_user, shares
  } = req.body;
  // need to do a standard find. and then if block. if exists count shares and a
  Portfolio.create({
    id_stock, price_per_share_at_purchase, id_league, id_user, shares
  })
    .then((entry) => {
      res.send(entry);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = {
  stockRouter
};
