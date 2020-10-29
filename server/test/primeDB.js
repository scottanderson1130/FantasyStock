/* eslint-disable camelcase */
/* eslint-disable no-console */
require('dotenv').config();

const {
  League,
  League_user,
  // Message,
  Portfolio,
  Stock,
  User
} = require('../db/index.js');
// messages req
// history req
// portfolio stock _user

function primeDB() {
  League.findOrCreate({
    where: {
      league_name: 'The League',
      settings: {
        test: 'testvalue',
        test2: 'othertestvalue'
      }
    }
  })
    .then((res) => {
      if (res) {
        return console.log('✅ League Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League.findOrCreate({
      where: {
        league_name: 'The League of Extraordinary Gentlemen Investors',
        settings: {
          test: 'testvalue',
          test2: 'othertestvalue'
        }
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Other League Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'Spiderman',
        full_name: 'Peter Parker',
        email: 'parker@DailyBugle.org',
        phone_number: '(225) 999-9999',
        bank_balance: 1000000,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'Batman',
        full_name: 'Bruce Wayne',
        email: 'Bdubs@WayneEnterprises.org',
        phone_number: '(225) 999-9998',
        bank_balance: 815556,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User2 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'Superman',
        full_name: 'Clark Kent',
        email: 'Kent@DailyPlanet.org',
        phone_number: '(225) 999-9997',
        bank_balance: 1000000,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User3 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'StarLord',
        full_name: 'Peter Quill',
        email: 'StarLord@guardians.org',
        phone_number: '(225) 999-9996',
        bank_balance: 1000000,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User4 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'Colt18',
        full_name: 'Peyton Manning',
        email: 'Omaha@Colts.org',
        phone_number: '(225) 999-1999',
        bank_balance: 1000000,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User5 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'GOAT',
        full_name: 'Tom Brady',
        email: 'TB@Pats.org',
        phone_number: '(225) 999-9918',
        bank_balance: 1000000,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User6 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'ShortyJJ',
        full_name: 'Drew Brees',
        email: 'NOLALOVER@Saints.org',
        phone_number: '(225) 991-9998',
        bank_balance: 1000000,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User7 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'GreatestShowOnTurf',
        full_name: 'Kurt Warner',
        email: 'RamsHero@Rams.org',
        phone_number: '(225) 999-7798',
        bank_balance: 1000000,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User8 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'IronMan',
        full_name: 'Tony Stark',
        email: 'BigMan@Avengers.org',
        phone_number: '(225) 999-7111',
        bank_balance: 1000000,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User9 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => User.findOrCreate({
      where: {
        username: 'StrongestAvenger',
        full_name: 'Bruce Banner',
        email: 'Green@Avengers.org',
        phone_number: '(225) 999-7398',
        bank_balance: 1000000,
        net_worth: 0
        // edit these numbers
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ User10 Created');
      }
      return console.error('❌save undefined');
    })
    // id_league
    // id_user
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 1,
        id_user: 5
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User1 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 1,
        id_user: 6
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User2 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 1,
        id_user: 7
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User3 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 1,
        id_user: 8
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User4 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: 1
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User5 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: 2
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User6 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: 3
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User7 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: 4
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User8 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: 9
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User9 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: 10
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User10 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: 5
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User11 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => League_user.findOrCreate({
      where: {
        id_league: 2,
        id_user: 6
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ League_User12 Association Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'AAPL',
        company_name: 'Apple, Inc.',
        current_price_per_share: 11215,
        date_updated: '2020-10-28',
        shares_available: 98
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ AAPL Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'GOOGL',
        company_name: 'Alphabet, Inc.',
        current_price_per_share: 151959,
        date_updated: '2020-10-28',
        shares_available: 99
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ GOOGL Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'MSFT',
        company_name: 'Microsoft Corp.',
        current_price_per_share: 20455,
        date_updated: '2020-10-28',
        shares_available: 100
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ MSFT Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'GE',
        company_name: 'General Electric Co.',
        current_price_per_share: 777,
        date_updated: '2020-10-28',
        shares_available: 100
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ GE Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'V',
        company_name: 'Visa, Inc.',
        current_price_per_share: 17986,
        date_updated: '2020-10-28',
        shares_available: 100
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ V Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'BBBY',
        company_name: 'Bed Bath & Beyond, Inc.',
        current_price_per_share: 2127,
        date_updated: '2020-10-28',
        shares_available: 90
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ BBBY Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'SAM',
        company_name: 'Boston Beer Co., Inc.',
        current_price_per_share: 104364,
        date_updated: '2020-10-28',
        shares_available: 100
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ SAM Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'UAA',
        company_name: 'Under Armour, Inc.',
        current_price_per_share: 1325,
        date_updated: '2020-10-28',
        shares_available: 100
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ UAA Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'NKE',
        company_name: 'NIKE, Inc.',
        current_price_per_share: 12250,
        date_updated: '2020-10-28',
        shares_available: 100
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ NKE Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Stock.findOrCreate({
      where: {
        ticker: 'NVDA',
        company_name: 'NVIDIA Corp.',
        current_price_per_share: 51258,
        date_updated: '2020-10-28',
        shares_available: 100
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ NVDA Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Portfolio.findOrCreate({
      where: {
        id_user: 1,
        id_stock: 1,
        id_league: 2,
        shares: 2,
        price_per_share_at_purchase: 11215
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Portfolio1 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Portfolio.findOrCreate({
      where: {
        id_user: 1,
        id_stock: 2,
        id_league: 2,
        shares: 1,
        price_per_share_at_purchase: 151959
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Portfolio2 Created');
      }
      return console.error('❌save undefined');
    })
    .then(() => Portfolio.findOrCreate({
      where: {
        id_user: 1,
        id_stock: 6,
        id_league: 2,
        shares: 10,
        price_per_share_at_purchase: 2127
      }
    }))
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Portfolio3 Created');
      }
      return console.error('❌save undefined');
    })
    .catch((err) => {
      console.error(`❌${err}`);
    });
}

primeDB();
