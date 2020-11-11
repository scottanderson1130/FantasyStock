/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const { Router } = require('express');
const { Op } = require('sequelize');

const {
  Stock,
  Stock_user,
  League_user
} = require('../db/index');
const {
  checkSharesAvailable,
  checkMoneyAvailable,
  updateStocks
} = require('./helpers');

const stockRouter = Router();

// get all stock info
stockRouter.get('/', (req, res) => {
  updateStocks()
    .then((updatedStocks) => updatedStocks)
    .then((updatedStocks) => updatedStocks.map(async (stockInfoX) => {
      const stockArray = Object.values(stockInfoX);

      const plug = async (stockInfo) => {
        if (!stockInfo) {
          return null;
        }
        const updatedStock = {};
        if (!stockInfo.quote == null) {
          updatedStock.ticker = stockInfo.quote.symbol;
          updatedStock.current_price_per_share = Math.round(stockInfo.quote.latestPrice * 100);
          //   // Todo: moment for date_updated
          Stock.update({
            current_price_per_share: updatedStock.current_price_per_share
          },
          {
            where: {
              ticker: updatedStock.ticker
            }
          })
            .catch((err) => {
              console.warn(err);
              res.status(500).send(err);
            });
        }
        return null;
      };
      return Promise.all(stockArray.map((stockInfo) => {
        plug(stockInfo);
      }))
        .then(() => {
          Stock.findAll()
            .then((stocks) => {
              res.send(stocks);
            })
            .catch((err) => {
              console.warn(err);
              res.status(500).send(err);
            });
        })
        .catch((err) => {
          console.warn(err);
          res.status(500).send(err);
        });
    }))
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
      console.warn(err);
      res.status(500).send(err);
    });
});

// get league_user by user id

stockRouter.get('/bank/:userID/:leagueID', (req, res) => {
  const { userID, leagueID } = req.params;
  League_user.findOne({
    where: {
      id_user: userID,
      id_league: leagueID
    }
  })
    .then((bank) => {
      res.send(bank);
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send(err);
    });
});

// get user's portfolio info by user primary key id
// add stock info to each portfolio instance
stockRouter.get('/portfolio/:userID', async (req, res) => {
  const { userID } = req.params;
  await Stock_user.findAll({
    where: {
      id_user: userID
    }
  })
    .then((arrayOfPortfolios) => {
      const response = [];
      arrayOfPortfolios.map((portfolio) => {
        const detailedInfo = { ...portfolio.dataValues };
        Stock.findByPk(portfolio.dataValues.id_stock)
          .then((stock) => {
            detailedInfo.stock = { ...stock.dataValues };
            response.push(detailedInfo);
          });
      });
      // un-ghetto later
      setTimeout(() => {
        res.send(response);
      }, 50);
    })
    .catch((err) => {
      console.warn(err);
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
  // sync
  const delayStockUpdate = async () => {
    updateStocks()
      .then((updatedStocks) => updatedStocks)
      .then((updatedStocks) => updatedStocks.map((stockInfoX) => {
        const stockArray = Object.values(stockInfoX);
        const plug = (stockInfo) => {
          if (!stockInfo && !stockInfo.company_name) {
            return null;
          }
          const updatedStock = {};
          if (stockInfo.quote.latestPrice !== null) {
            updatedStock.ticker = stockInfo.quote.symbol;
            updatedStock.company_name = stockInfo.quote.companyName;
            updatedStock.current_price_per_share = Math.round(stockInfo.quote.latestPrice * 100);
            // TODO: moment for date_updated
            // TODO: switch company name to not regularly updated
            return Stock.update({
              current_price_per_share: updatedStock.current_price_per_share,
              company_name: updatedStock.company_name
            },
            {
              where: {
                ticker: updatedStock.ticker
              }
            }).then((data) => data)
              .catch((err) => {
                res.status(500).send(err);
              });
          }
          return null;
        };
        return Promise.all(stockArray.map((stockInfo) => {
          plug(stockInfo);
        }))
          .then(() => {
            Stock.findAll()
              .then((stocks) => stocks)
              .catch((err) => {
                res.status(500).send(err);
              });
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      }))
      .catch((err) => {
        res.status(500).send(err);
      });
  };

  delayStockUpdate().then(() => {});
  // sync
  const { leagueID } = req.params;
  const waivers = [];
  // axios call to update Stock first. then do the findall
  Stock.findAll({
    where: {
      current_price_per_share: {
        [Op.ne]: null
      }
    }
  })
    .then((allStocks) => {
      // allStocks is an array of objects (stocks from stock) at this point
      // need to calculate shares
      Stock_user.findAll({
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
                updatedStock.sharesRemaining -= indPortEntry.portfolio.shares;
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
      console.warn(err);
      res.status(500).send(err);
    });
});

// need to add block from negative shares
// also make sure it caps at 100 stocks? think it is tho.
stockRouter.post('/waivers', async (req, res) => {
  const {
    id_stock, id_league, id_user, portfolio
  } = req.body;
  const {
    shares, price_per_share_at_purchase
  } = portfolio;
  const cost = shares * price_per_share_at_purchase;
  const moneyAvailable = await checkMoneyAvailable(id_league, id_user);
  const sharesAvailable = checkSharesAvailable(id_stock, id_league, id_user);
  if (moneyAvailable < cost) {
    res.send('not enough money');
  }
  const newBankBalance = moneyAvailable - cost;
  if (sharesAvailable < shares) {
    res.send('not enough shares available');
  }
  // TODO: add history aspect
  Stock_user.findAll({
    where: {
      id_stock, id_league, id_user
    }
  })
    .then((entry) => {
      if (entry.length === 0) {
        Stock_user.create({
          id_stock, id_league, id_user, portfolio
        })
          .then(() => {
            League_user.update({
              bank_balance: newBankBalance
            },
            {
              where: {
                id_league, id_user
              }
            });
          })
          .then(() => {
            const data = {
              id_stock, id_league, id_user, portfolio
            };
            res.send(data);
          });
      } else {
        const currentShares = entry[0].dataValues.portfolio.shares;
        // TODO: round this
        const updatedPriceperShare = ((shares * price_per_share_at_purchase)
          + (currentShares * entry[0].dataValues.portfolio.price_per_share_at_purchase))
          / (currentShares + shares);
        const updatedPortfolio = {
          shares: currentShares + shares,
          price_per_share_at_purchase: updatedPriceperShare
        };
        League_user.update({
          bank_balance: newBankBalance
        },
        {
          where: {
            id_league, id_user
          }
        })
          .then(() => {
            Stock_user.update({ portfolio: updatedPortfolio },
              {
                where: {
                  id_league, id_user, id_stock
                }
              })
              .then(() => {
                const data = {
                  id_stock, id_league, id_user, portfolio: updatedPortfolio
                };
                res.send(data);
              }).then(() => {
                Stock_user.destroy({
                  where: {
                    id_stock,
                    id_league,
                    id_user,
                    portfolio: {
                      shares: 0
                    }
                  }
                });
              });
          }).then((response) => response)
          .catch(() => res.sendStatus(404));
      }
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send(err);
    });
});

module.exports = {
  stockRouter
};
